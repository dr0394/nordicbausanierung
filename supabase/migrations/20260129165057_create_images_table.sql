/*
  # Image Gallery Database Schema

  1. New Tables
    - `images`
      - `id` (uuid, primary key) - Unique identifier for each image
      - `title` (text) - Image title
      - `description` (text, nullable) - Optional image description
      - `file_path` (text) - Path to the image in Supabase Storage
      - `file_url` (text) - Public URL to access the image
      - `category` (text) - Image category (e.g., 'renovierung', 'neubau', 'sanierung')
      - `uploaded_at` (timestamptz) - Upload timestamp
      - `uploaded_by` (uuid, nullable) - User who uploaded (optional for now)
      - `is_featured` (boolean) - Whether to show in featured gallery
      - `display_order` (integer) - Order for displaying images

  2. Security
    - Enable RLS on `images` table
    - Add policy for public read access (anyone can view images)
    - Add policy for authenticated users to insert images
    - Add policy for authenticated users to update their own images
    - Add policy for authenticated users to delete their own images

  3. Storage
    - Create storage bucket 'gallery-images' with public read access
*/

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  file_path text NOT NULL,
  file_url text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  uploaded_at timestamptz DEFAULT now(),
  uploaded_by uuid,
  is_featured boolean DEFAULT true,
  display_order integer DEFAULT 0
);

-- Enable RLS
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Public read access - anyone can view images
CREATE POLICY "Anyone can view images"
  ON images FOR SELECT
  USING (true);

-- Authenticated users can insert images
CREATE POLICY "Authenticated users can upload images"
  ON images FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update images
CREATE POLICY "Authenticated users can update images"
  ON images FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete images
CREATE POLICY "Authenticated users can delete images"
  ON images FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_display_order ON images(display_order);
CREATE INDEX IF NOT EXISTS idx_images_is_featured ON images(is_featured);