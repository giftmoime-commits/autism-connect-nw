
-- =====================================================================
-- STORAGE OBJECT POLICIES
-- =====================================================================
CREATE POLICY "public_buckets_read" ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id IN ('school-images', 'downloads'));

CREATE POLICY "admins_write_public_buckets" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id IN ('school-images', 'downloads') AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id IN ('school-images', 'downloads') AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "app_docs_owner_rw" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id = 'application-documents' AND auth.uid()::text = (storage.foldername(name))[1])
  WITH CHECK (bucket_id = 'application-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "app_docs_admin_rw" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id = 'application-documents' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'application-documents' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "app_docs_school_read" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'application-documents' AND public.has_role(auth.uid(), 'school'));

CREATE POLICY "vol_docs_owner_rw" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id = 'volunteer-docs' AND auth.uid()::text = (storage.foldername(name))[1])
  WITH CHECK (bucket_id = 'volunteer-docs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "vol_docs_admin_rw" ON storage.objects FOR ALL TO authenticated
  USING (bucket_id = 'volunteer-docs' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'volunteer-docs' AND public.has_role(auth.uid(), 'admin'));

-- =====================================================================
-- SEED DATA
-- =====================================================================
INSERT INTO public.schools (slug, name, town, municipality, address, phone, email, principal, description, vision, type, gender, age_min, age_max, fees, boarding, transport, spaces, image) VALUES
('mahikeng-autism-academy', 'Mahikeng Autism Academy', 'Mahikeng', 'Mahikeng Local Municipality', '23 Nelson Mandela Dr, Mahikeng', '+27 18 381 1100', 'info@mahikengautism.org.za', 'Mr. Thabo Mosime', 'A pioneering specialist school serving the Ngaka Modiri Molema district since 2008. Small class sizes, daily speech & OT integration, and a sensory garden built by parents.', 'Every learner has a future authored by their own voice.', 'Public LSEN', 'Mixed', 4, 18, 'R 12 000 / year', false, true, 6, 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=70'),
('potchefstroom-bright-horizons', 'Potchefstroom Bright Horizons', 'Potchefstroom', 'JB Marks Local Municipality', '12 Tom Street, Potchefstroom', '+27 18 297 5500', 'admin@brighthorizons.org.za', 'Ms. Annelie van der Merwe', 'Established by a parent collective in 2014. Project-based learning with weekly community outings to build life skills.', 'Bright minds, bright futures — at their own pace.', 'Independent LSEN', 'Mixed', 5, 16, 'R 28 000 / year', false, true, 4, 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=70'),
('rustenburg-rainbow-school', 'Rustenburg Rainbow School', 'Rustenburg', 'Rustenburg Local Municipality', '8 Heystek St, Rustenburg', '+27 14 592 7000', 'office@rainbowschool.co.za', 'Dr. Sipho Dlamini', 'A medium-sized inclusive school with a strong vocational stream for older learners — bakery, hospitality and computer skills.', 'Different colours, one shining light.', 'Public LSEN', 'Mixed', 6, 19, 'R 14 500 / year', true, true, 12, 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70'),
('klerksdorp-stepping-stones', 'Klerksdorp Stepping Stones', 'Klerksdorp', 'City of Matlosana', '45 Dr Yusuf Dadoo Ave, Klerksdorp', '+27 18 462 9900', 'hello@steppingstones.co.za', 'Mrs. Karabo Mokoena', 'Small intimate setting (max 60 learners) with 1:4 staff ratio and on-site speech therapist.', 'One step at a time, every day.', 'Independent LSEN', 'Mixed', 3, 14, 'R 24 000 / year', false, true, 2, 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=1600&q=70'),
('brits-sunshine-centre', 'Brits Sunshine Centre', 'Brits', 'Madibeng Local Municipality', '17 Hendrik Verwoerd St, Brits', '+27 12 252 4400', 'contact@britssunshine.co.za', 'Mr. Jacob Mahlangu', 'Faith-based school offering wrap-around aftercare and a Saturday parents'' support group.', 'Sunshine in every child, every day.', 'Independent LSEN', 'Mixed', 4, 14, 'R 18 000 / year', false, true, 8, 'https://images.unsplash.com/photo-1564429097439-e078e8a6d8f7?auto=format&fit=crop&w=1600&q=70'),
('vryburg-naledi-academy', 'Vryburg Naledi Academy', 'Vryburg', 'Naledi Local Municipality', '6 Market Square, Vryburg', '+27 53 927 1100', 'principal@nalediacademy.org.za', 'Ms. Lerato Setshogoe', 'The province''s newest specialist school (opened 2024) — fresh facilities, large outdoor sensory area.', 'Rising stars of the Naledi region.', 'Public LSEN', 'Mixed', 4, 12, 'R 9 800 / year', false, true, 14, 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=70'),
('zeerust-hope-school', 'Zeerust Hope School', 'Zeerust', 'Ramotshere Moiloa Local Municipality', '22 Church St, Zeerust', '+27 18 642 3300', 'hopeschool@zeerust.co.za', 'Mrs. Dineo Pilane', 'Serving the rural Ramotshere area; mobile therapy unit visits weekly.', 'Hope, dignity and learning for every family.', 'Public LSEN', 'Mixed', 5, 16, 'R 7 500 / year', false, true, 5, 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=70'),
('lichtenburg-cornerstone', 'Lichtenburg Cornerstone', 'Lichtenburg', 'Ditsobotla Local Municipality', '101 Nelson Mandela Dr, Lichtenburg', '+27 18 632 4400', 'cornerstone@lichtenburg.co.za', 'Mr. Pieter Botha', 'Established 1998. Strongest extracurricular programme in the province — music, swimming and adapted sports.', 'Strong foundations, lifelong friendships.', 'Independent LSEN', 'Mixed', 6, 18, 'R 22 000 / year', false, true, 0, 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=70');

INSERT INTO public.school_facilities (school_id, facility)
SELECT id, unnest(ARRAY['Sensory Room', 'Therapy Pool', 'Music Room', 'Adapted Playground', 'On-site OT', 'On-site Speech Therapist', 'Library', 'Computer Lab']) FROM public.schools;

INSERT INTO public.psychologists (name, qualifications, practice, town, phone, email, years, medical_aid, languages, image) VALUES
('Dr. Nomvula Khumalo', 'PhD Clinical Psychology (Wits)', 'Khumalo Psychology Rooms', 'Mahikeng', '+27 18 381 2200', 'rooms@drkhumalo.co.za', 14, true, ARRAY['English','Setswana','Zulu'], 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=70'),
('Dr. Pieter van Rooyen', 'MA Educational Psychology (NWU)', 'Potch Child Psychology', 'Potchefstroom', '+27 18 293 1144', 'info@potchchild.co.za', 9, true, ARRAY['Afrikaans','English'], 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=70'),
('Ms. Tshegofatso Molefe', 'MA Counselling Psychology', 'Rustenburg Family Wellness', 'Rustenburg', '+27 14 592 0088', 'tshego@familywellness.co.za', 6, false, ARRAY['English','Setswana'], 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70'),
('Dr. Anika Pretorius', 'DPsych Clinical (UFS)', 'Klerksdorp Psychology Centre', 'Klerksdorp', '+27 18 462 7711', 'anika@kpc.co.za', 18, true, ARRAY['Afrikaans','English'], 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=70'),
('Mr. Tebogo Mahlangu', 'MA Educational Psychology', 'Brits School Psychology Service', 'Brits', '+27 12 252 8800', 'tebogo@britspsych.co.za', 4, false, ARRAY['English','Setswana','Zulu'], 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=70'),
('Dr. Suzanne Meyer', 'PhD Neuropsychology', 'Meyer Neurodevelopmental', 'Potchefstroom', '+27 18 297 9000', 'suzanne@meyerneuro.co.za', 22, true, ARRAY['English','Afrikaans'], 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=70');

INSERT INTO public.clinics (name, type, town, address, phone, hours) VALUES
('Mahikeng Provincial Hospital', 'Emergency', 'Mahikeng', 'Cnr First & Hospital Rd, Mahikeng', '+27 18 383 2000', '24 hours'),
('Klerksdorp/Tshepong Hospital Complex', 'Government', 'Klerksdorp', 'Roosevelt Park, Klerksdorp', '+27 18 406 4600', '24 hours'),
('Mediclinic Potchefstroom', 'Private', 'Potchefstroom', '100 Peter Mokaba St, Potchefstroom', '+27 18 293 7800', '24 hours'),
('Job Shimankana Tabane Hospital', 'Government', 'Rustenburg', 'Heystek St, Rustenburg', '+27 14 590 5100', '24 hours'),
('SADAG Mental Health Helpline', 'Mental Health', 'Province-wide', 'Toll-free national helpline', '0800 567 567', '24 hours'),
('Brits Hospital', 'Government', 'Brits', 'Hendrik Verwoerd St, Brits', '+27 12 381 4400', '24 hours');

INSERT INTO public.activities (title, description, age_range, town, schedule, image) VALUES
('Music Therapy', 'Weekly rhythm and instrument sessions led by a registered music therapist.', '4-16', 'Potchefstroom', 'Saturdays 09:00', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=70'),
('Therapeutic Swimming', 'Heated pool sessions focusing on body awareness and calming.', '3-14', 'Klerksdorp', 'Wednesdays 15:30', 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=70'),
('Art Therapy', 'Open studio time with structured prompts and sensory-friendly materials.', '5-18', 'Rustenburg', 'Fridays 16:00', 'https://images.unsplash.com/photo-1499892477393-f675706cbe6e?auto=format&fit=crop&w=1200&q=70'),
('Sensory Play', 'Indoor sensory gym with safe climbing, swings and tactile stations.', '2-8', 'Mahikeng', 'Daily drop-in', 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=70'),
('Horse Riding', 'Equine-assisted therapy at a local farm; helmets and side-walkers provided.', '6-18', 'Brits', 'Sundays 10:00', 'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=1200&q=70'),
('Cooking Club', 'Life-skills cooking with picture-based recipes.', '8-18', 'Potchefstroom', 'Tuesdays 17:00', 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=70'),
('Adapted Sports', 'Soccer and athletics with neuro-friendly coaching.', '6-16', 'Klerksdorp', 'Thursdays 16:00', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=70'),
('Computer Classes', 'Typing, safe browsing, and intro to coding.', '9-18', 'Mahikeng', 'Mondays 14:00', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=70'),
('Reading Club', 'Visual-supported storytelling and read-along.', '5-12', 'Rustenburg', 'Saturdays 11:00', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=70'),
('Dance & Movement', 'Free movement to music in a low-stimulus studio.', '4-14', 'Potchefstroom', 'Wednesdays 17:00', 'https://images.unsplash.com/photo-1535525153412-5a092d46af2f?auto=format&fit=crop&w=1200&q=70'),
('Social Skills Group', 'Small-group play with a facilitator modelling turn-taking.', '6-12', 'Brits', 'Saturdays 10:00', 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=70'),
('Life Skills Workshop', 'Money, transport and self-care skills for teens.', '13-18', 'Klerksdorp', 'Fridays 15:00', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=70');

INSERT INTO public.news (slug, title, excerpt, body, published_at) VALUES
('new-autism-unit-vryburg', 'New autism unit opens in Vryburg', 'Naledi Local Municipality launches the province''s 25th specialist unit.', 'Full body text would go here.', '2026-06-12'),
('parent-workshop-meltdowns', 'Free parent workshop: managing meltdowns', 'Saturday morning workshop in Potchefstroom — register your seat.', 'Full body text would go here.', '2026-07-05'),
('volunteer-drive-readers', 'Volunteer drive: 100 readers needed', 'Help us launch reading clubs at five schools across the province.', 'Full body text would go here.', '2026-07-19'),
('awareness-walk-mahikeng', 'Awareness walk through Mahikeng', 'Annual community walk — join families, schools and clinicians.', 'Full body text would go here.', '2026-08-02');

INSERT INTO public.events (title, description, starts_at, town, location) VALUES
('Parent Support Group — Potchefstroom', 'Monthly informal meet-up with tea and biscuits.', '2026-07-12 09:00+02', 'Potchefstroom', 'Bright Horizons School Hall'),
('OT Open Day — Rustenburg', 'Free 20-minute consultations with occupational therapists.', '2026-07-19 09:00+02', 'Rustenburg', 'Rainbow School'),
('Annual Autism Awareness Walk', '5km community walk; T-shirts provided.', '2026-08-02 07:00+02', 'Mahikeng', 'Cookes Lake'),
('Teen Life Skills Day', 'Money, transport and cooking workshops.', '2026-08-23 09:00+02', 'Klerksdorp', 'Stepping Stones School');
