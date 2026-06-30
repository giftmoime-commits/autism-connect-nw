import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { psychologists, towns } from "@/lib/data";
import { Mail, Phone, MapPin, Languages, Check } from "lucide-react";

export const Route = createFileRoute("/psychologists")({
  head: () => ({ meta: [{ title: "Psychologists — Autism Schools NW" }, { name: "description", content: "Find registered psychologists who work with autistic children across the North West." }] }),
  component: PsychologistsPage,
});

function PsychologistsPage() {
  const [town, setTown] = useState("");
  const [lang, setLang] = useState("");
  const [med, setMed] = useState(false);
  const list = useMemo(() => psychologists.filter((p) =>
    (!town || p.town === town) && (!lang || p.languages.includes(lang)) && (!med || p.medicalAid)
  ), [town, lang, med]);
  const langs = Array.from(new Set(psychologists.flatMap((p) => p.languages))).sort();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Healthcare" title="Psychologists directory" subtitle="Find a clinician you can trust, near where you live." />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5 md:grid-cols-4">
            <select className="rounded-lg bg-slate-50 px-3 py-2 text-sm" value={town} onChange={(e) => setTown(e.target.value)}>
              <option value="">All towns</option>
              {towns.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select className="rounded-lg bg-slate-50 px-3 py-2 text-sm" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="">Any language</option>
              {langs.map((l) => <option key={l}>{l}</option>)}
            </select>
            <label className="flex items-center gap-2 text-sm md:col-span-2">
              <input type="checkbox" checked={med} onChange={(e) => setMed(e.target.checked)} /> Accepts medical aid
            </label>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-sm">
                <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-brand-ink/60">{p.qualifications}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-blue">{p.practice}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    <li className="flex items-center gap-2"><MapPin size={14} /> {p.town}</li>
                    <li className="flex items-center gap-2"><Phone size={14} /> <a href={`tel:${p.phone}`}>{p.phone}</a></li>
                    <li className="flex items-center gap-2"><Mail size={14} /> <a className="break-all" href={`mailto:${p.email}`}>{p.email}</a></li>
                    <li className="flex items-center gap-2"><Languages size={14} /> {p.languages.join(", ")}</li>
                    {p.medicalAid && <li className="flex items-center gap-2 text-emerald-600"><Check size={14} /> Accepts medical aid</li>}
                  </ul>
                  <button className="mt-5 w-full rounded-xl bg-brand-blue py-2.5 text-sm font-bold text-white hover:bg-brand-blue-dark">Book appointment</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}