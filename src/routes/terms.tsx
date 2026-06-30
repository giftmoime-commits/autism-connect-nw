import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Autism Schools NW" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Terms & conditions" subtitle="The rules for using our platform." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-sm text-brand-ink/80">
          <p>By using this platform you agree to provide accurate information, respect other users, and use the service only for lawful purposes related to autism education and care.</p>
          <p>School listings, fee information and capacity are provided by participating schools and may change without notice. Always confirm details directly with the school.</p>
          <p>We do not provide medical advice. Always consult a qualified professional.</p>
        </div>
      </section>
    </SiteLayout>
  );
}