import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about-autism")({
  head: () => ({ meta: [{ title: "About Autism — Autism Schools NW" }] }),
  component: AboutAutismPage,
});

function AboutAutismPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Learn" title="About autism" subtitle="A short, plain-language introduction for parents and caregivers." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-brand-ink/80">
          <p>Autism Spectrum Disorder (ASD) is a developmental difference that affects how a person communicates, processes sensory information, and relates to others. It's called a spectrum because every autistic person experiences it differently — strengths, challenges and support needs all vary.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Common signs in early childhood</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Delayed or different speech and language development.</li>
            <li>Strong preference for routine; distress with change.</li>
            <li>Sensory differences — sounds, lights, textures or smells.</li>
            <li>Intense focus on particular interests.</li>
            <li>Different patterns of eye contact and social interaction.</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Getting a diagnosis</h2>
          <p>A diagnosis typically involves a paediatrician, psychologist and speech therapist. Early identification opens doors to therapy, specialist schools and government support.</p>
          <h2 className="font-display text-2xl font-bold text-brand-ink">Therapies that help</h2>
          <p>Speech therapy, occupational therapy, ABA / structured teaching and family coaching all show strong evidence. Our directory can help you find clinicians and schools that offer these.</p>
        </div>
      </section>
    </SiteLayout>
  );
}