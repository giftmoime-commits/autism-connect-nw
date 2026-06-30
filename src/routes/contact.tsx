import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Autism Schools NW" }, { name: "description", content: "Get in touch with the Autism Schools NW team." }] }),
  component: ContactPage,
});

const faqs = [
  { q: "How do I apply to a school?", a: "Use the online application form. We'll send your information to your top-choice schools and you can track status from your account." },
  { q: "Is the service free?", a: "Yes. Our directory and application service are free for families. Schools charge their own fees." },
  { q: "What documents do I need?", a: "See the Required Documents page for a full checklist — at minimum a birth certificate, parent ID, and a recent medical or psychologist report." },
  { q: "Can I volunteer if I'm a student?", a: "Yes — students are welcome. We'll match you to schools that can supervise and provide letters of service." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="We're here to help" subtitle="Send us a message or reach us by phone, email or WhatsApp." />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          {sent ? (
            <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-black/5">
              <h3 className="font-display text-2xl font-bold">Thanks — message sent</h3>
              <p className="mt-2 text-brand-ink/70">We aim to reply within one working day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-3xl bg-white p-8 ring-1 ring-black/5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input required placeholder="Your name" className={inputCls} />
                <input required type="email" placeholder="Email" className={inputCls} />
                <input placeholder="Phone (optional)" className={`${inputCls} md:col-span-2`} />
                <input required placeholder="Subject" className={`${inputCls} md:col-span-2`} />
                <textarea required rows={6} placeholder="How can we help?" className={`${inputCls} md:col-span-2`} />
              </div>
              <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white hover:bg-brand-blue-dark">Send message</button>
            </form>
          )}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-brand-bg p-6 ring-1 ring-black/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Direct</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-brand-blue" /> Mafikeng, North West Province</li>
                <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-brand-blue" /> +27 18 000 0000</li>
                <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-brand-blue" /> hello@autismschoolsnw.org.za</li>
              </ul>
              <div className="mt-5 flex gap-3 text-brand-ink/60">
                <Facebook size={18} /><Instagram size={18} /><Linkedin size={18} />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
              <iframe title="map" width="100%" height="220" loading="lazy" src="https://www.google.com/maps?q=Mafikeng,%20North%20West%20Province&output=embed" />
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-black/5 rounded-3xl bg-white ring-1 ring-black/5">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-brand-blue group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-brand-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";