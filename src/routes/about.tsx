import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About the Platform — Autism Schools NW" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title="A one-stop hub for autism families" subtitle="Built with families, schools and clinicians across the North West Province." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-brand-ink/80">
          <p>Autism Schools North West Province is a community-built directory and application service. We help parents, guardians and caregivers locate autism-friendly schools, therapists, clinics, support groups and volunteer opportunities — without spending weeks on phone calls.</p>
          <p>Our team works with the provincial Department of Education, NGOs and registered schools to keep school listings accurate, capacity numbers up to date, and the application process as simple as possible.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">What we believe</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Every child deserves a placement in a school that understands them.</li>
            <li>Families should not have to navigate the system alone.</li>
            <li>Information should be free, accessible and available in plain language.</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}