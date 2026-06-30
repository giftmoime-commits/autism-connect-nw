
# Autism Schools North West Province — Build Plan

This is a large spec. I'll deliver it in phases so you can review progress and steer at each step. We'll start by picking a design direction, then build the public site, then add backend/auth/dashboards, then AI and notifications.

## Phase 0 — Design directions (next step)
- Generate 3 rendered homepage directions using your palette (Blue #2563EB, Teal #14B8A6, Orange #F59E0B, bg #F8FAFC).
- All three: clean, friendly, accessible, mobile-first, large icons, soft shadows, rounded corners.
- They vary in: hero composition, density, imagery treatment, and section rhythm.
- You pick one — I lock that direction and apply it across every page.

## Phase 1 — Public site (frontend, placeholder data)
Routes:
- `/` Home — hero with 4 CTAs (Find Schools, Apply Now, Volunteer, Nearby Clinics), stats cards, quick search.
- `/schools` directory with filters (town, municipality, name, age, space, gender) + school cards.
- `/schools/$id` school detail — gallery, vision, admission process, facilities, map, downloads.
- `/apply` 5-step application form (Child → Medical → Education → Documents → Review).
- `/volunteer` registration form.
- `/activities` activity cards + events calendar.
- `/psychologists` directory + filters + book buttons.
- `/clinics` map view + emergency numbers list.
- `/resources` community resources + downloads.
- `/news` events / workshops / campaigns.
- `/contact` form + FAQ + WhatsApp + map.
- `/required-documents`, `/about-autism`, `/about`, `/faq`, `/privacy`, `/terms`, `/accessibility`, `/donate`, `/partner`, `/success-stories`, `/feedback`.

Placeholder data: ~8 schools, ~6 psychologists, ~6 clinics, ~12 activities, sample news. Stock-style imagery via generated images.

Each route gets its own SEO `head()` metadata.

## Phase 2 — Backend (Lovable Cloud)
- Enable Lovable Cloud.
- Schema: schools, school_facilities, school_documents, applications, application_documents, children, parents, psychologists, clinics, volunteers, activities, events, news, profiles, user_roles, notifications.
- RLS on every table; `user_roles` table + `has_role()` function (admin / school / parent / volunteer).
- Storage buckets: `school-images` (public), `application-documents` (private), `volunteer-docs` (private), `downloads` (public).
- Seed migration with the placeholder data so the site reads from DB.

## Phase 3 — Auth & dashboards
- Email/password + Google sign-in (broker).
- Routes under `_authenticated/`:
  - Parent dashboard: track applications, upload missing docs, notifications, download submitted forms, appointment status.
  - School dashboard: view applicants for their school, update status.
  - Admin dashboard: stats, manage schools/psychologists/clinics/activities/news, approve applications, manage volunteers, export CSV.
- `/auth` public sign-in/sign-up + `/reset-password`.
- Application form (Phase 1) wired to insert into `applications` for signed-in users; allow guest applications too, linked by email.

## Phase 4 — AI features (Lovable AI Gateway)
- AI School Recommendation server function — inputs: age, location, autism level, needs; ranks schools from DB.
- AI Chat Assistant — floating widget, streaming, system prompt grounded in app FAQ + schools/clinics data.

## Phase 5 — Notifications & extras
- Email notifications (application submitted/approved, missing docs, interview date) via Lovable Cloud auth emails + a generic transactional sender.
- WhatsApp/SMS deferred: needs Twilio or similar — I'll surface and ask for keys when we get there.
- Accessibility toggles: high-contrast, large-text, keyboard nav audit.
- Google Maps embeds (static iframe) — full Maps API integration deferred unless you want the connector now.

## Out of scope for v1 (flagged for later)
- Native mobile app, multilingual (English/Setswana/Afrikaans), video consults, donation processing, transport tracker, forum, AI symptom checker.

## Technical notes
- Stack: existing TanStack Start + React 19 + Tailwind v4 + shadcn/ui (the spec mentions Next.js but this template is TanStack Start — same DX, same deploy story).
- Forms: react-hook-form + zod validation, with file uploads to private storage buckets.
- Animations: framer-motion for hero + card reveals.
- Charts (admin stats): recharts.

## What happens after you approve
I'll start Phase 0: generate 3 design directions for the homepage and ask you to pick one. Then I'll build straight through Phases 1 → 5, pausing only when I need a secret (e.g. WhatsApp provider) or a decision.
