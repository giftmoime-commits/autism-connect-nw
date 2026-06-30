import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { SchoolCard } from "@/components/site/SchoolCard";
import { schools, towns, municipalities } from "@/lib/data";

export const Route = createFileRoute("/schools/")({
  head: () => ({
    meta: [
      { title: "Schools Directory — Autism Schools NW" },
      { name: "description", content: "Browse autism-friendly schools across the North West Province of South Africa." },
      { property: "og:title", content: "Schools Directory" },
      { property: "og:description", content: "Browse autism-friendly schools across the North West Province." },
    ],
  }),
  component: SchoolsList,
});

function SchoolsList() {
  const [q, setQ] = useState("");
  const [town, setTown] = useState("");
  const [muni, setMuni] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [onlySpaces, setOnlySpaces] = useState(false);

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      if (q && !s.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (town && s.town !== town) return false;
      if (muni && s.municipality !== muni) return false;
      if (gender && s.gender !== gender) return false;
      if (onlySpaces && s.spaces === 0) return false;
      if (age) {
        const n = Number(age);
        if (n < s.ageMin || n > s.ageMax) return false;
      }
      return true;
    });
  }, [q, town, muni, gender, age, onlySpaces]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Directory"
        title="Schools across the North West"
        subtitle="All registered autism-friendly schools in one place. Filter by town, age and availability."
      />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5 md:grid-cols-6">
            <input className="rounded-lg bg-slate-50 px-3 py-2 text-sm md:col-span-2" placeholder="Search school name…" value={q} onChange={(e) => setQ(e.target.value)} />
            <select className="rounded-lg bg-slate-50 px-3 py-2 text-sm" value={town} onChange={(e) => setTown(e.target.value)}>
              <option value="">All towns</option>
              {towns.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select className="rounded-lg bg-slate-50 px-3 py-2 text-sm" value={muni} onChange={(e) => setMuni(e.target.value)}>
              <option value="">All municipalities</option>
              {municipalities.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select className="rounded-lg bg-slate-50 px-3 py-2 text-sm" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Any gender</option>
              <option>Mixed</option>
              <option>Boys</option>
              <option>Girls</option>
            </select>
            <input className="rounded-lg bg-slate-50 px-3 py-2 text-sm" placeholder="Child age" type="number" min={2} max={20} value={age} onChange={(e) => setAge(e.target.value)} />
            <label className="flex items-center gap-2 text-sm md:col-span-6">
              <input type="checkbox" checked={onlySpaces} onChange={(e) => setOnlySpaces(e.target.checked)} />
              Only show schools with open spaces
            </label>
          </div>
          <p className="mt-4 text-sm text-brand-ink/60">{filtered.length} school{filtered.length === 1 ? "" : "s"} found</p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => <SchoolCard key={s.id} school={s} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}