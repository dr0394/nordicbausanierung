/*
  # Update Storage Bucket for Video Support

  1. Changes
    - Increase file size limit to 100MB to support videos
    - Add video MIME types (mp4, webm, ogg)
    - Keep existing image MIME types

  2. Security Notes
    - File size limit increased from 5MB to 100MB
    - Supports common video formats
    - Public access remains unchanged
*/

-- Update the bucket configuration to support videos
UPDATE storage.buckets
SET 
  file_size_limit = 104857600,
  allowed_mime_types = ARRAY[
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'video/mp4',
    'video/webm',
    'video/ogg',
    'video/quicktime'
  ]
WHERE name = 'gallery-images';
