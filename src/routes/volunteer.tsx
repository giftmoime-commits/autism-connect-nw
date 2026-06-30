import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Autism Schools NW" },
      { name: "description", content: "Volunteer at autism-friendly schools and programmes across the North West Province." },
    ],
  }),
  component: VolunteerPage,
});

const interests = ["Reading", "Sports", "Art", "Music", "Gardening", "Computer Skills", "Therapy Support"];

function VolunteerPage() {
  const [done, setDone] = useState(false);
  const [picks, setPicks] = useState<string[]>([]);
  const toggle = (i: string) => setPicks((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  if (done) {
    return (
      <SiteLayout>
        <section className="py-24">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-12 text-center ring-1 ring-black/5 shadow-sm">
            <CheckCircle2 className="mx-auto text-brand-teal" size={56} />
            <h1 className="mt-6 font-display text-3xl font-bold">Thank you for volunteering</h1>
            <p className="mt-4 text-brand-ink/70">We'll be in touch within a week with next steps and the schools nearest to you.</p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader eyebrow="Volunteer" title="Lend a hand in your community" subtitle="Whether you have an hour a week or a Saturday a month — your time matters." />
      <section className="py-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-white p-8 ring-1 ring-black/5 px-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Full name"><input required className={inputCls} /></Field>
            <Field label="Phone"><input required className={inputCls} /></Field>
            <Field label="Email"><input type="email" required className={inputCls} /></Field>
            <Field label="Town"><input required className={inputCls} /></Field>
            <Field label="Occupation"><input className={inputCls} /></Field>
            <Field label="Years of relevant experience"><input type="number" className={inputCls} /></Field>
            <Field label="Skills you can share" full><textarea rows={3} className={inputCls} /></Field>
            <Field label="When are you available?" full><input placeholder="e.g. Saturday mornings" className={inputCls} /></Field>
          </div>
          <fieldset>
            <legend className="text-xs font-semibold text-brand-ink/70">Areas of interest</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => toggle(i)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors ${picks.includes(i) ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-ink/70"}`}
                >
                  {i}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm">
            <input type="checkbox" required className="mt-1" />
            <span>I have a valid police clearance certificate (or am willing to obtain one before working with children).</span>
          </label>
          <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white hover:bg-brand-blue-dark">
            Submit registration
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";
function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs font-semibold text-brand-ink/70">{label}</span>
      {children}
    </label>
  );
}