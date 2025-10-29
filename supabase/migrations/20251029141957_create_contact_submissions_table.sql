/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact person's name
      - `email` (text) - Contact person's email address
      - `company` (text, nullable) - Company name (optional field)
      - `message` (text) - The message content from the contact
      - `created_at` (timestamptz) - Timestamp of when the submission was created
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact submissions
    - No read policies - only admin should access submissions through dashboard
  
  3. Notes
    - Anonymous insert is allowed since this is a public contact form
    - Submissions are write-only from the public perspective for security
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);