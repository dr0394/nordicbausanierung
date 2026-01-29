/*
  # Improve RLS Policies Security

  1. Changes - images table
    - Remove unrestricted UPDATE policy
    - Remove unrestricted DELETE policy
    - Keep SELECT public (needed for gallery display)
    - Keep INSERT public (needed for image upload functionality)
    - Add comment that authentication should be added for production

  2. Changes - storage.objects
    - Keep existing policies (they already check bucket_id)
    - These are acceptable for now but should be restricted with auth later

  3. Security Notes
    - UPDATE and DELETE operations on images table are now blocked
    - This prevents unauthorized modification and deletion of image records
    - For production, implement authentication and add owner-based policies
    - File deletion can still happen through storage policies (to be addressed with auth)
*/

-- Drop overly permissive policies on images table
DROP POLICY IF EXISTS "Anyone can update images" ON public.images;
DROP POLICY IF EXISTS "Anyone can delete images" ON public.images;

-- Note: SELECT and INSERT policies remain for functionality
-- To add authenticated update/delete later, uncomment and adjust:

-- CREATE POLICY "Authenticated users can update images"
--   ON public.images
--   FOR UPDATE
--   TO authenticated
--   USING (auth.uid() = uploaded_by)
--   WITH CHECK (auth.uid() = uploaded_by);

-- CREATE POLICY "Authenticated users can delete images"
--   ON public.images
--   FOR DELETE
--   TO authenticated
--   USING (auth.uid() = uploaded_by);