/*
  # Create Storage Bucket for Gallery Images

  1. Storage Setup
    - Create 'gallery-images' bucket for storing uploaded images
    - Set bucket as public for easy access
    - Configure file size limit to 5MB

  2. Storage Policies
    - Allow authenticated users to upload images
    - Allow public read access to all images
    - Allow authenticated users to delete their uploaded images

  3. Important Notes
    - Bucket is public for easy gallery display
    - File size limit: 5MB
    - Accepted formats: images only
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery-images',
  'gallery-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Public read access for gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;

-- Policy: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'gallery-images');

-- Policy: Allow public read access to all images
CREATE POLICY "Public read access for gallery images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'gallery-images');

-- Policy: Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'gallery-images');