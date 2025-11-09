"use client";

import React, { useState } from 'react';
import { CheckCircle, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { Translation } from '../types';
import { supabase } from '../lib/supabase';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';
import { Label } from './ui/label.tsx';
import { RadioGroup, RadioGroupItem } from './ui/radio-group.tsx';
import toast from 'react-hot-toast';

interface QuizProps {
  t: Translation;
}

export default function Quiz({ t }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalQuestions = t.quiz.questions.length;

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions) {
      const currentQuestionId = t.quiz.questions[currentStep].id;
      if (!answers[currentQuestionId]) {
        toast.error('Please select an answer before proceeding.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email) {
      toast.error('Name and Email are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('quiz_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            quiz_answers: answers,
          },
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '' });
      setAnswers({}); // Clear answers after submission
      setCurrentStep(0); // Reset quiz to start

      toast.success(t.quiz.finalStep.success);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      toast.error(t.quiz.finalStep.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (questionData: typeof t.quiz.questions[0]) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {questionData.question}
      </h3>
      <RadioGroup
        onValueChange={(value) => handleAnswerChange(questionData.id, value)}
        value={answers[questionData.id] || ''}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {questionData.options.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:shadow-md has-[:checked]:ring-2 has-[:checked]:ring-blue-500"
          >
            <RadioGroupItem value={option.value} id={`${questionData.id}-${option.value}`} className="sr-only" />
            <Label
              htmlFor={`${questionData.id}-${option.value}`}
              className="flex items-center space-x-3 w-full cursor-pointer text-lg font-medium text-gray-700"
            >
              {option.icon && <span className="text-2xl">{option.icon}</span>}
              <span>{option.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  const renderFinalStep = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {t.quiz.finalStep.title}
      </h3>
      <p className="text-lg text-gray-600 mb-8 text-center">
        {t.quiz.finalStep.subtitle}
      </p>

      <div>
        <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.quiz.finalStep.name}
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.quiz.finalStep.email}
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
      </div>
      <div>
        <Label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.quiz.finalStep.company}
        </Label>
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleFormChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />
      </div>

      <p className="text-sm text-gray-500 text-center mt-4">
        {t.quiz.finalStep.privacy}
      </p>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        <span>{isSubmitting ? '...' : t.quiz.finalStep.submit}</span>
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );

  const isCurrentQuestionAnswered = currentStep < totalQuestions && answers[t.quiz.questions[currentStep]?.id];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.quiz.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.quiz.subtitle}
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-xl text-green-700 font-semibold">
              {t.quiz.finalStep.success}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            {currentStep < totalQuestions
              ? renderQuestion(t.quiz.questions[currentStep])
              : renderFinalStep()}

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.quiz.backButton}</span>
                </Button>
              )}
              {currentStep < totalQuestions && (
                <Button
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered}
                  className="ml-auto flex items-center space-x-2"
                >
                  <span>{t.quiz.nextButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}