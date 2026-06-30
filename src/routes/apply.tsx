import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { CheckCircle2, ChevronLeft, ChevronRight, Upload } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply Online — Autism Schools NW" },
      { name: "description", content: "Apply online for placement at autism-friendly schools across the North West Province." },
    ],
  }),
  component: ApplyPage,
});

const steps = ["Child", "Medical", "Education", "Documents", "Review"] as const;

function ApplyPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  if (done) {
    return (
      <SiteLayout>
        <section className="py-24">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-12 text-center ring-1 ring-black/5 shadow-sm">
            <CheckCircle2 className="mx-auto text-brand-teal" size={56} />
            <h1 className="mt-6 font-display text-3xl font-bold">Application submitted</h1>
            <p className="mt-4 text-brand-ink/70">
              Thank you. We've received your application and emailed a copy to {data.parentEmail || "you"}.
              Schools will respond within 14 working days. You can track progress from your account.
            </p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader eyebrow="Apply" title="Online application" subtitle="Five short steps. You can save and return at any time." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* Progress */}
          <ol className="mb-10 flex items-center justify-between gap-2">
            {steps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center gap-2">
                <div className={`flex size-8 items-center justify-center rounded-full text-xs font-bold ${i <= step ? "bg-brand-blue text-white" : "bg-slate-200 text-brand-ink/50"}`}>{i + 1}</div>
                <span className={`hidden text-xs font-semibold sm:inline ${i === step ? "text-brand-blue" : "text-brand-ink/50"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`h-px flex-1 ${i < step ? "bg-brand-blue" : "bg-slate-200"}`} />}
              </li>
            ))}
          </ol>

          <div className="rounded-3xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
            {step === 0 && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="Child's first name"><input className={inputCls} onChange={set("firstName")} /></Field>
                <Field label="Surname"><input className={inputCls} onChange={set("surname")} /></Field>
                <Field label="Date of birth"><input type="date" className={inputCls} onChange={set("dob")} /></Field>
                <Field label="Gender">
                  <select className={inputCls} onChange={set("gender")}>
                    <option>Boy</option><option>Girl</option><option>Other</option>
                  </select>
                </Field>
                <Field label="ID number"><input className={inputCls} onChange={set("id")} /></Field>
                <Field label="Home address" full><input className={inputCls} onChange={set("address")} /></Field>
                <Field label="Parent / guardian name"><input className={inputCls} onChange={set("parentName")} /></Field>
                <Field label="Parent email"><input type="email" className={inputCls} onChange={set("parentEmail")} /></Field>
                <Field label="Parent phone"><input className={inputCls} onChange={set("parentPhone")} /></Field>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="Diagnosis"><input className={inputCls} placeholder="e.g. Autism Spectrum Disorder" onChange={set("diagnosis")} /></Field>
                <Field label="Autism level / support need">
                  <select className={inputCls} onChange={set("level")}>
                    <option>Level 1 — requires support</option>
                    <option>Level 2 — substantial support</option>
                    <option>Level 3 — very substantial support</option>
                  </select>
                </Field>
                <Field label="Medication" full><input className={inputCls} onChange={set("medication")} /></Field>
                <Field label="Allergies" full><input className={inputCls} onChange={set("allergies")} /></Field>
                <Field label="Other medical conditions" full><textarea rows={3} className={inputCls} onChange={set("medical")} /></Field>
                <Field label="Treating doctor name"><input className={inputCls} onChange={set("doctor")} /></Field>
                <Field label="Emergency contact phone"><input className={inputCls} onChange={set("emergency")} /></Field>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="Previous school"><input className={inputCls} onChange={set("prevSchool")} /></Field>
                <Field label="Current grade"><input className={inputCls} onChange={set("grade")} /></Field>
                <Field label="Support needs" full><textarea rows={3} className={inputCls} onChange={set("support")} /></Field>
                <Field label="Communication skills" full><textarea rows={3} className={inputCls} onChange={set("communication")} /></Field>
                <Field label="Behaviour notes" full><textarea rows={3} className={inputCls} onChange={set("behaviour")} /></Field>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-3">
                {[
                  "Birth Certificate",
                  "Parent ID Copy",
                  "Medical Report",
                  "Proof of Address",
                  "Latest School Report",
                  "Psychologist Assessment",
                  "Speech Therapist Report",
                  "Clinic Card / Immunisation Record",
                ].map((doc) => (
                  <label key={doc} className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-4">
                    <span className="text-sm font-medium">{doc}</span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue ring-1 ring-black/10 cursor-pointer">
                      <Upload size={14} /> Upload
                      <input type="file" className="hidden" />
                    </span>
                  </label>
                ))}
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="font-display text-xl font-bold">Review & submit</h3>
                <p className="mt-2 text-sm text-brand-ink/60">Please confirm the details below are correct.</p>
                <dl className="mt-4 grid grid-cols-1 gap-3 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
                  {Object.entries(data).map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">{k}</dt>
                      <dd className="mt-0.5">{v || "—"}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-brand-ink/70 disabled:opacity-30"
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue-dark"
              >
                Continue <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setDone(true)}
                className="rounded-full bg-brand-teal px-6 py-3 text-sm font-bold text-white hover:brightness-110"
              >
                Submit application
              </button>
            )}
          </div>
        </div>
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