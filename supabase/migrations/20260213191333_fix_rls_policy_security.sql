/*
  # Fix RLS Policy Security Issue

  1. Security Fix - RLS Policy
    - Remove overly permissive INSERT policy with WITH CHECK (true)
    - Replace with policy that allows anonymous uploads but with validation
    - Ensure uploaded_by field is either NULL (anonymous) or matches auth user
    - This prevents the "always true" security vulnerability

  2. Auth DB Connection Strategy Note
    - The Auth connection strategy must be configured in Supabase Dashboard
    - Go to Project Settings → Database → Connection pooling
    - Change from fixed connection count to percentage-based allocation
    - This cannot be configured via SQL migration due to permissions
    - Recommended: Set to 15% for better scaling

  3. Important Notes
    - Anonymous uploads are allowed for now (public website)
    - In production, implement proper authentication
    - Add rate limiting at application level to prevent abuse
    - Consider adding CAPTCHA or other anti-spam measures
*/

-- Drop the overly permissive INSERT policies
DROP POLICY IF EXISTS "Authenticated users can upload images" ON public.images;
DROP POLICY IF EXISTS "Anyone can upload images" ON public.images;

-- Create a secure INSERT policy for anonymous uploads
-- This allows uploads but ensures the uploaded_by field is properly set
CREATE POLICY "Public uploads require valid user reference"
  ON public.images
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- For anonymous users, uploaded_by must be NULL
    (auth.uid() IS NULL AND uploaded_by IS NULL)
    OR
    -- For authenticated users, uploaded_by must match their ID
    (auth.uid() IS NOT NULL AND uploaded_by = auth.uid())
  );
