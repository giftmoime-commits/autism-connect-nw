
-- ENUMS
CREATE TYPE public.app_role AS ENUM ('admin', 'school', 'parent', 'volunteer');
CREATE TYPE public.application_status AS ENUM ('submitted', 'under_review', 'documents_required', 'interview_scheduled', 'accepted', 'waitlisted', 'rejected', 'withdrawn');
CREATE TYPE public.school_gender AS ENUM ('Mixed', 'Boys', 'Girls');
CREATE TYPE public.clinic_type AS ENUM ('Government', 'Private', 'Emergency', 'Mental Health');

-- TIMESTAMP TRIGGER
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- PROFILES
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  town TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ROLES
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  school_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role, school_id)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_school_admin(_user_id UUID, _school_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = 'school' AND school_id = _school_id);
$$;

-- SCHOOLS
CREATE TABLE public.schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  town TEXT NOT NULL,
  municipality TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT, email TEXT, principal TEXT,
  description TEXT, vision TEXT, type TEXT,
  gender public.school_gender NOT NULL DEFAULT 'Mixed',
  age_min INT NOT NULL DEFAULT 4, age_max INT NOT NULL DEFAULT 18,
  fees TEXT,
  boarding BOOLEAN NOT NULL DEFAULT false,
  transport BOOLEAN NOT NULL DEFAULT false,
  spaces INT NOT NULL DEFAULT 0,
  image TEXT, lat NUMERIC, lng NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.schools TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.schools TO authenticated;
GRANT ALL ON public.schools TO service_role;
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_schools_updated_at BEFORE UPDATE ON public.schools FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.school_facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  facility TEXT NOT NULL
);
GRANT SELECT ON public.school_facilities TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.school_facilities TO authenticated;
GRANT ALL ON public.school_facilities TO service_role;
ALTER TABLE public.school_facilities ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.school_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.school_documents TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.school_documents TO authenticated;
GRANT ALL ON public.school_documents TO service_role;
ALTER TABLE public.school_documents ENABLE ROW LEVEL SECURITY;

-- PSYCHOLOGISTS / CLINICS / ACTIVITIES / EVENTS / NEWS
CREATE TABLE public.psychologists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL, qualifications TEXT, practice TEXT,
  town TEXT NOT NULL, phone TEXT, email TEXT, years INT,
  medical_aid BOOLEAN NOT NULL DEFAULT false,
  languages TEXT[] NOT NULL DEFAULT '{}',
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.psychologists TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.psychologists TO authenticated;
GRANT ALL ON public.psychologists TO service_role;
ALTER TABLE public.psychologists ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_psychologists_updated_at BEFORE UPDATE ON public.psychologists FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.clinics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL, type public.clinic_type NOT NULL,
  town TEXT NOT NULL, address TEXT, phone TEXT, hours TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.clinics TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.clinics TO authenticated;
GRANT ALL ON public.clinics TO service_role;
ALTER TABLE public.clinics ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL, description TEXT,
  age_range TEXT, town TEXT, schedule TEXT, image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.activities TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.activities TO authenticated;
GRANT ALL ON public.activities TO service_role;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL, description TEXT,
  starts_at TIMESTAMPTZ NOT NULL,
  town TEXT, location TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL, excerpt TEXT, body TEXT,
  cover_image TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.news TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.news TO authenticated;
GRANT ALL ON public.news TO service_role;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- CHILDREN / APPLICATIONS
CREATE TABLE public.children (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL, surname TEXT NOT NULL,
  dob DATE, gender TEXT, id_number TEXT, address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.children TO authenticated;
GRANT ALL ON public.children TO service_role;
ALTER TABLE public.children ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_children_updated_at BEFORE UPDATE ON public.children FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  parent_email TEXT NOT NULL, parent_name TEXT, parent_phone TEXT,
  child_id UUID REFERENCES public.children(id) ON DELETE SET NULL,
  child_first_name TEXT NOT NULL, child_surname TEXT NOT NULL,
  child_dob DATE, child_gender TEXT, child_id_number TEXT,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  status public.application_status NOT NULL DEFAULT 'submitted',
  diagnosis TEXT, autism_level TEXT,
  medication TEXT, allergies TEXT, medical_notes TEXT,
  prev_school TEXT, grade TEXT,
  support_needs TEXT, communication TEXT, behaviour TEXT, notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.applications TO authenticated;
GRANT INSERT ON public.applications TO anon;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.application_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  name TEXT NOT NULL, file_path TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.application_documents TO authenticated;
GRANT ALL ON public.application_documents TO service_role;
ALTER TABLE public.application_documents ENABLE ROW LEVEL SECURITY;

-- VOLUNTEERS
CREATE TABLE public.volunteers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL, email TEXT NOT NULL,
  phone TEXT, town TEXT, occupation TEXT, years INT,
  skills TEXT, availability TEXT,
  interests TEXT[] NOT NULL DEFAULT '{}',
  police_clearance BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.volunteers TO authenticated;
GRANT INSERT ON public.volunteers TO anon;
GRANT ALL ON public.volunteers TO service_role;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_volunteers_updated_at BEFORE UPDATE ON public.volunteers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- NOTIFICATIONS
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL, body TEXT, link TEXT,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "profiles_self_select" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "profiles_self_update" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY "profiles_self_insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());

CREATE POLICY "roles_self_select" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "roles_admin_write" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "schools_public_read" ON public.schools FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "schools_admin_insert" ON public.schools FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "schools_admin_delete" ON public.schools FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "schools_admin_or_school_update" ON public.schools FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), id))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), id));

CREATE POLICY "facilities_public_read" ON public.school_facilities FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "facilities_admin_write" ON public.school_facilities FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id));

CREATE POLICY "school_docs_public_read" ON public.school_documents FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "school_docs_admin_write" ON public.school_documents FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id));

CREATE POLICY "psy_read" ON public.psychologists FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "psy_admin_write" ON public.psychologists FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "clinics_read" ON public.clinics FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "clinics_admin_write" ON public.clinics FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "activities_read" ON public.activities FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "activities_admin_write" ON public.activities FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "events_read" ON public.events FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "events_admin_write" ON public.events FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "news_read" ON public.news FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "news_admin_write" ON public.news FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "children_parent_select" ON public.children FOR SELECT TO authenticated USING (parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "children_parent_insert" ON public.children FOR INSERT TO authenticated WITH CHECK (parent_id = auth.uid());
CREATE POLICY "children_parent_update" ON public.children FOR UPDATE TO authenticated USING (parent_id = auth.uid()) WITH CHECK (parent_id = auth.uid());
CREATE POLICY "children_parent_delete" ON public.children FOR DELETE TO authenticated USING (parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "apps_guest_insert" ON public.applications FOR INSERT TO anon WITH CHECK (parent_id IS NULL);
CREATE POLICY "apps_user_insert" ON public.applications FOR INSERT TO authenticated WITH CHECK (parent_id = auth.uid() OR parent_id IS NULL);
CREATE POLICY "apps_select" ON public.applications FOR SELECT TO authenticated USING (
  parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id)
);
CREATE POLICY "apps_update" ON public.applications FOR UPDATE TO authenticated USING (
  parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id)
) WITH CHECK (
  parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), school_id)
);
CREATE POLICY "apps_admin_delete" ON public.applications FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "app_docs_select" ON public.application_documents FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM public.applications a WHERE a.id = application_id AND (
    a.parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin') OR public.is_school_admin(auth.uid(), a.school_id)
  ))
);
CREATE POLICY "app_docs_insert" ON public.application_documents FOR INSERT TO authenticated WITH CHECK (
  EXISTS (SELECT 1 FROM public.applications a WHERE a.id = application_id AND (
    a.parent_id = auth.uid() OR public.has_role(auth.uid(), 'admin')
  ))
);
CREATE POLICY "app_docs_admin_manage" ON public.application_documents FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "volunteers_guest_insert" ON public.volunteers FOR INSERT TO anon WITH CHECK (user_id IS NULL);
CREATE POLICY "volunteers_user_insert" ON public.volunteers FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() OR user_id IS NULL);
CREATE POLICY "volunteers_self_select" ON public.volunteers FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "volunteers_self_update" ON public.volunteers FOR UPDATE TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin')) WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "volunteers_admin_delete" ON public.volunteers FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "notifs_self_select" ON public.notifications FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "notifs_self_update" ON public.notifications FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "notifs_self_delete" ON public.notifications FOR DELETE TO authenticated USING (user_id = auth.uid());

-- INDEXES
CREATE INDEX idx_schools_town ON public.schools(town);
CREATE INDEX idx_schools_municipality ON public.schools(municipality);
CREATE INDEX idx_applications_school ON public.applications(school_id);
CREATE INDEX idx_applications_parent ON public.applications(parent_id);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_notifications_user ON public.notifications(user_id, read);
