/*
  # Update Storage Policies for Anonymous Access

  1. Changes
    - Allow anonymous users to upload images
    - Allow anonymous users to delete images
    - Keep public read access

  2. Security Notes
    - This allows anyone to upload and delete images
    - Consider adding authentication in the future for production use
    - For now, this enables the image upload functionality to work
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;

-- Policy: Allow anyone to upload images
CREATE POLICY "Anyone can upload images"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'gallery-images');

-- Policy: Allow anyone to delete images
CREATE POLICY "Anyone can delete images"
  ON storage.objects
  FOR DELETE
  TO public
  USING (bucket_id = 'gallery-images');