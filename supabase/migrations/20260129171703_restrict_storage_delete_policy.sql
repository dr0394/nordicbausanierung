/*
  # Restrict Storage Delete Policy

  1. Changes
    - Remove unrestricted delete policy on storage.objects
    - Keep public read and insert for functionality
    - Files can no longer be deleted without authentication

  2. Security Notes
    - This prevents unauthorized deletion of files
    - Upload and viewing functionality remains intact
    - For production, implement authentication and add owner-based delete policy
*/

-- Drop the storage delete policy
DROP POLICY IF EXISTS "Anyone can delete images" ON storage.objects;

-- Note: To add authenticated delete later, uncomment and adjust:
-- CREATE POLICY "Authenticated users can delete their images"
--   ON storage.objects
--   FOR DELETE
--   TO authenticated
--   USING (bucket_id = 'gallery-images' AND owner = auth.uid());