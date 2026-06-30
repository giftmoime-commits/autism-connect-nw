import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/required-documents")({
  head: () => ({ meta: [{ title: "Required Documents — Autism Schools NW" }, { name: "description", content: "Complete checklist of documents needed to apply." }] }),
  component: DocsPage,
});

const required = [
  { name: "Birth Certificate", note: "Unabridged certificate from Home Affairs." },
  { name: "Parent / Guardian ID", note: "Certified copy, not older than three months." },
  { name: "Medical Report", note: "Signed by a registered medical practitioner." },
  { name: "Psychologist Report", note: "Recent assessment confirming diagnosis." },
  { name: "Speech Therapy Assessment", note: "If your child has had speech therapy." },
  { name: "Proof of Address", note: "Utility bill or affidavit, not older than three months." },
  { name: "Immunisation Record", note: "Road-to-Health (clinic) card or equivalent." },
  { name: "Latest School Report", note: "Most recent term or year-end report." },
];

function DocsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Apply" title="Required documents" subtitle="Have these ready before you start the online application — it saves time." />
      <section className="py-10">
        <div className="mx-auto max-w-3xl space-y-3 px-6">
          {required.map((d) => (
            <div key={d.name} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <CheckCircle2 className="mt-0.5 text-brand-teal" size={22} />
              <div>
                <h3 className="font-display text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-brand-ink/60">{d.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}