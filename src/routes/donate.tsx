import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({ meta: [{ title: "Donate — Autism Schools NW" }] }),
  component: DonatePage,
});

function DonatePage() {
  return (
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
  );
}