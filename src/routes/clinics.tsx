import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { clinics } from "@/lib/data";
import { Phone, MapPin, Clock, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/clinics")({
  head: () => ({ meta: [{ title: "Clinics & Emergency — Autism Schools NW" }, { name: "description", content: "Find clinics and emergency services across the North West Province." }] }),
  component: ClinicsPage,
});

const emergencies = [
  { label: "Ambulance (national)", number: "10177" },
  { label: "Police / Emergency", number: "10111" },
  { label: "ER24", number: "084 124" },
  { label: "Netcare 911", number: "082 911" },
  { label: "SADAG Mental Health", number: "0800 567 567" },
];

function ClinicsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Healthcare" title="Clinics & emergency services" subtitle="24-hour facilities, mental-health support and provincial hospitals near you." />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-4 rounded-3xl bg-brand-orange/10 p-6 ring-1 ring-brand-orange/30 sm:grid-cols-2 md:grid-cols-5">
            {emergencies.map((e) => (
              <a key={e.label} href={`tel:${e.number.replace(/\s/g, "")}`} className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/5 hover:shadow-md transition">
                <AlertTriangle size={20} className="mx-auto text-brand-orange" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-ink/60">{e.label}</p>
                <p className="font-display text-xl font-bold">{e.number}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinics.map((c) => (
              <article key={c.id} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
                <span className="inline-block rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal">{c.type}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{c.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
                  <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-brand-blue" /> {c.address}</li>
                  <li className="flex items-center gap-2"><Phone size={14} className="text-brand-blue" /> <a href={`tel:${c.phone}`}>{c.phone}</a></li>
                  <li className="flex items-center gap-2"><Clock size={14} className="text-brand-blue" /> {c.hours}</li>
                </ul>
                <div className="mt-5 flex gap-2">
                  <a href={`tel:${c.phone}`} className="flex-1 rounded-xl bg-brand-blue py-2 text-center text-sm font-bold text-white">Call</a>
                  <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${encodeURIComponent(c.name + ", " + c.address)}`} className="flex-1 rounded-xl bg-slate-100 py-2 text-center text-sm font-bold">Directions</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}