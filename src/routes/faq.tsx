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
  component: FaqPage,
});

function FaqPage() {
  return (
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
  );
}