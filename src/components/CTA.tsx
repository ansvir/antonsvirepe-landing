"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Translation } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import toast from 'react-hot-toast';
import {supabase} from "../lib/supabase.ts";

interface CTAProps {
  t: Translation;
}

export default function CTA({ t }: CTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t.cta.requiredFieldsMessage);
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
              quiz_answers: { message: formData.message },
            },
          ]);

      if (error) throw error;

      setIsSent(true);
      setFormData({ name: '', company: '', email: '', message: '' });

      setTimeout(() => setIsSent(false), 4000);
    } catch (e) {
      toast.error("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl text-blue-100">{t.cta.subtitle}</p>
          </div>

          {isSent ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
                <p className="text-2xl text-green-700 font-semibold">
                  {t.quiz.finalStep.success}
                </p>
              </div>
          ) : (
              <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-6"
              >
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.quiz.finalStep.name}
                  </Label>
                  <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.quiz.finalStep.email}
                  </Label>
                  <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.quiz.finalStep.company}
                  </Label>
                  <Input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="px-4 py-3 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="message"
                         className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.cta.messageLabel}
                  </Label>
                  <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none text-lg"
                  ></textarea>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700
                transition-colors font-bold text-lg flex items-center justify-center space-x-2 
                shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "..." : t.cta.button}</span>
                  <Send className="w-5"/>
                </Button>
              </form>
          )}
        </div>
      </section>
  );
}