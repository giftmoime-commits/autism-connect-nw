import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About the Platform — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="About" title="A one-stop hub for autism families" subtitle="Built with families, schools and clinicians across the North West Province." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-brand-ink/80">
          <p>Autism Schools North West Province is a community-built directory and application service. We help parents, guardians and caregivers locate autism-friendly schools, therapists, clinics, support groups and volunteer opportunities — without spending weeks on phone calls.</p>
          <p>Our team works with the provincial Department of Education, NGOs and registered schools to keep school listings accurate, capacity numbers up to date, and the application process as simple as possible.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">What we believe</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Every child deserves a placement in a school that understands them.</li>
            <li>Families should not have to navigate the system alone.</li>
            <li>Information should be free, accessible and available in plain language.</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/about-autism.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about-autism")({
  head: () => ({ meta: [{ title: "About Autism — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Learn" title="About autism" subtitle="A short, plain-language introduction for parents and caregivers." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-brand-ink/80">
          <p>Autism Spectrum Disorder (ASD) is a developmental difference that affects how a person communicates, processes sensory information, and relates to others. It's called a spectrum because every autistic person experiences it differently — strengths, challenges and support needs all vary.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Common signs in early childhood</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Delayed or different speech and language development.</li>
            <li>Strong preference for routine; distress with change.</li>
            <li>Sensory differences — sounds, lights, textures or smells.</li>
            <li>Intense focus on particular interests.</li>
            <li>Different patterns of eye contact and social interaction.</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Getting a diagnosis</h2>
          <p>A diagnosis typically involves a paediatrician, psychologist and speech therapist. Early identification opens doors to therapy, specialist schools and government support.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Therapies that help</h2>
          <p>Speech therapy, occupational therapy, ABA / structured teaching and family coaching all show strong evidence. Our directory can help you find clinicians and schools that offer these.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/faq.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

const faqs = [
  { q: "Who can use this platform?", a: "Parents, guardians, caregivers, teachers, volunteers and clinicians. Everything is free for families." },
  { q: "Is my child's information safe?", a: "Yes. Applications are encrypted, only shared with the schools you choose, and you can withdraw at any time." },
  { q: "How long does an application take to process?", a: "Schools typically respond within 14 working days. You will be notified by email, SMS and (optionally) WhatsApp." },
  { q: "Can I apply to more than one school?", a: "Yes — submit once and select up to three schools to receive your application." },
  { q: "What if my child is not yet diagnosed?", a: "You can still create an account, browse schools, and contact psychologists in our directory to begin an assessment." },
  { q: "Do you offer support in Setswana or Afrikaans?", a: "We are adding Setswana and Afrikaans support — for now, our chat assistant can translate common questions." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Help" title="Frequently asked questions" subtitle="Quick answers to the most common questions we hear from families." />
      <section className="py-10">
        <div className="mx-auto max-w-3xl divide-y divide-black/5 rounded-3xl bg-white px-2 ring-1 ring-black/5 sm:px-4">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">{f.q}<span className="text-brand-blue group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-3 text-sm text-brand-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/privacy.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Privacy policy" subtitle="How we collect, store and share your information." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-sm text-brand-ink/80">
          <p>This policy explains how Autism Schools North West Province ("we", "us") collects and uses personal information in line with the Protection of Personal Information Act, 2013 (POPIA).</p>
          <h3 className="font-display text-lg font-bold text-brand-ink pt-4">Information we collect</h3>
          <p>Information you provide in our application and volunteer forms — including child name, date of birth, ID number, medical reports and contact details.</p>
          <h3 className="font-display text-lg font-bold text-brand-ink pt-4">How we use it</h3>
          <p>To process applications, share with the schools you select, send updates, and improve our services. We do not sell personal information.</p>
          <h3 className="font-display text-lg font-bold text-brand-ink pt-4">Your rights</h3>
          <p>You may access, correct or delete your information at any time. Email privacy@autismschoolsnw.org.za to make a request.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/terms.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Terms & conditions" subtitle="The rules for using our platform." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-sm text-brand-ink/80">
          <p>By using this platform you agree to provide accurate information, respect other users, and use the service only for lawful purposes related to autism education and care.</p>
          <p>School listings, fee information and capacity are provided by participating schools and may change without notice. Always confirm details directly with the school.</p>
          <p>We do not provide medical advice. Always consult a qualified professional.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/accessibility.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Accessibility" title="Built to be used by everyone" subtitle="We aim to meet WCAG 2.1 AA across the site." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-sm text-brand-ink/80">
          <p>Our goals include: high colour-contrast, large readable type, keyboard navigation on every page, alt text on every image, screen-reader friendly markup and plain-language content.</p>
          <p>If something on this site is hard to use, please email <a className="text-brand-blue underline" href="mailto:access@autismschoolsnw.org.za">access@autismschoolsnw.org.za</a> and we will fix it promptly.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/donate.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({ meta: [{ title: "Donate — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Support" title="Help a child find their school" subtitle="Your donation funds applications, transport vouchers and therapy bursaries." />
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange/70 p-10 text-center text-white shadow-lg">
            <Heart className="mx-auto" size={48} />
            <h2 className="mt-4 font-display text-3xl font-bold">Every contribution counts</h2>
            <p className="mt-3 max-w-xl mx-auto text-white/90">A R150 donation covers one application; R500 sponsors a month of music therapy; R2 500 funds a term of school transport.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["R150", "R500", "R2 500", "Other"].map((a) => (
                <button key={a} className="rounded-full bg-white px-6 py-2 font-bold text-brand-orange hover:bg-white/90">{a}</button>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm text-brand-ink/60 text-center">We are a registered NPO. Section 18A tax receipts available on request.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/partner.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/partner")({
  head: () => ({ meta: [{ title: "Become a Partner — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Partner" title="Work with us" subtitle="Schools, NGOs and corporates — let's expand access together." />
      <section className="py-10">
        <form className="mx-auto max-w-2xl space-y-4 rounded-3xl bg-white p-8 ring-1 ring-black/5 px-6">
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Organisation name" />
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Contact person" />
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" type="email" placeholder="Email" />
          <select className="w-full rounded-lg border border-black/10 px-3 py-2">
            <option>Partnership type…</option>
            <option>School / education</option>
            <option>Healthcare provider</option>
            <option>NGO / civil society</option>
            <option>Corporate sponsor</option>
          </select>
          <textarea rows={5} className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Tell us about your work…" />
          <button type="button" className="w-full rounded-full bg-brand-blue py-3 font-bold text-white">Send enquiry</button>
        </form>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/success-stories.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

const stories = [
  { name: "Lerato & Bokamoso", town: "Mahikeng", quote: "We waited two years before finding Bokang's school. With this platform it took two weeks. He now speaks three new words a month." },
  { name: "The Mokoena family", town: "Rustenburg", quote: "The transport voucher meant Karabo could finally attend a school that understood her. She comes home smiling." },
  { name: "Andries & Ouma", town: "Klerksdorp", quote: "As an Afrikaans-speaking family, we struggled. The directory listed schools in our language and a psychologist who saw us within a week." },
];

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [{ title: "Success Stories — Autism Schools NW" }] }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Stories" title="Families finding their place" subtitle="Real journeys from families across the province." />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.name} className="rounded-3xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
              <p className="font-display text-xl italic leading-snug">"{s.quote}"</p>
              <p className="mt-6 text-sm font-bold">{s.name}</p>
              <p className="text-xs text-brand-ink/60">{s.town}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});
*** Add File: src/routes/feedback.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({ meta: [{ title: "Feedback — Autism Schools NW" }] }),
  component: () => {
    const [rating, setRating] = useState(0);
    const [sent, setSent] = useState(false);
    return (
      <SiteLayout>
        <PageHeader eyebrow="Feedback" title="Help us improve" subtitle="Tell us what worked, what didn't, and what's missing." />
        <section className="py-10">
          {sent ? (
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center ring-1 ring-black/5">
              <h3 className="font-display text-2xl font-bold">Thanks for your feedback</h3>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 ring-1 ring-black/5 px-6">
              <div>
                <p className="text-xs font-semibold text-brand-ink/70">How was your experience?</p>
                <div className="mt-2 flex gap-1 text-3xl">
                  {[1,2,3,4,5].map((n) => (
                    <button type="button" key={n} onClick={() => setRating(n)} className={n <= rating ? "text-brand-orange" : "text-slate-300"}>★</button>
                  ))}
                </div>
              </div>
              <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Name (optional)" />
              <input type="email" className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Email (optional)" />
              <textarea rows={5} required className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Your feedback" />
              <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white">Send feedback</button>
            </form>
          )}
        </section>
      </SiteLayout>
    );
  },
});
*** Add File: src/routes/auth.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — Autism Schools NW" }] }),
  component: AuthPage,
});

const roles = ["Parent", "School", "Volunteer", "Administrator"] as const;

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [role, setRole] = useState<(typeof roles)[number]>("Parent");
  return (
    <SiteLayout>
      <section className="grid min-h-[80dvh] grid-cols-1 lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">Autism Schools NW</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">Welcome back to the community.</h2>
            <p className="mt-4 max-w-md text-white/80">Track your application, manage volunteer schedules, or sign in as a school to review new placements.</p>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>✓ Secure email & password authentication</li>
            <li>✓ POPIA-compliant data handling</li>
            <li>✓ Email verification & forgotten-password recovery</li>
          </ul>
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <div className="mb-6 flex gap-1 rounded-full bg-slate-100 p-1 text-sm font-semibold">
              {(["signin", "signup", "forgot"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`flex-1 rounded-full py-2 transition-colors ${mode === m ? "bg-white text-brand-blue shadow-sm" : "text-brand-ink/60"}`}>
                  {m === "signin" ? "Sign in" : m === "signup" ? "Create account" : "Forgot"}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-brand-ink/70 mb-2">I am a…</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <button key={r} onClick={() => setRole(r)} className={`rounded-full px-3 py-1 text-xs font-semibold ${role === r ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-ink/60"}`}>{r}</button>
                ))}
              </div>
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {mode === "signup" && <input className={inputCls} placeholder="Full name" required />}
              <input className={inputCls} type="email" placeholder="Email" required />
              {mode !== "forgot" && <input className={inputCls} type="password" placeholder="Password" required />}
              <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white hover:bg-brand-blue-dark">
                {mode === "signin" ? `Sign in as ${role}` : mode === "signup" ? "Create account" : "Send reset link"}
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-brand-ink/50">By continuing you agree to our terms & privacy policy.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";