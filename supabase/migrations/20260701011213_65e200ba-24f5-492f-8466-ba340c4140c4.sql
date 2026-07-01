
-- 1) Restrict school users' storage read to only their own school's application documents
DROP POLICY IF EXISTS "app_docs_school_read" ON storage.objects;
CREATE POLICY "app_docs_school_read" ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'application-documents'
  AND EXISTS (
    SELECT 1
    FROM public.application_documents ad
    JOIN public.applications a ON a.id = ad.application_id
    WHERE ad.file_path = storage.objects.name
      AND public.is_school_admin(auth.uid(), a.school_id)
  )
);

-- 2) Require authenticated inserts to set parent_id = auth.uid()
DROP POLICY IF EXISTS "apps_user_insert" ON public.applications;
CREATE POLICY "apps_user_insert" ON public.applications
FOR INSERT TO authenticated
WITH CHECK (parent_id = auth.uid());

-- 3) Convert role-check helpers to SECURITY INVOKER (they only ever look up the caller's own rows,
--    and user_roles RLS already lets a user read their own roles).
ALTER FUNCTION public.has_role(uuid, public.app_role) SECURITY INVOKER;
ALTER FUNCTION public.is_school_admin(uuid, uuid) SECURITY INVOKER;

-- 4) Lock down handle_new_user (SECURITY DEFINER trigger) so it isn't callable by clients.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
