import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Autism Schools NW" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
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
  );
}