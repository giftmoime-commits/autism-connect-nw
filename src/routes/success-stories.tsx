import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

const stories = [
  { name: "Lerato & Bokamoso", town: "Mahikeng", quote: "We waited two years before finding Bokang's school. With this platform it took two weeks. He now speaks three new words a month." },
  { name: "The Mokoena family", town: "Rustenburg", quote: "The transport voucher meant Karabo could finally attend a school that understood her. She comes home smiling." },
  { name: "Andries & Ouma", town: "Klerksdorp", quote: "As an Afrikaans-speaking family, we struggled. The directory listed schools in our language and a psychologist who saw us within a week." },
];

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [{ title: "Success Stories — Autism Schools NW" }] }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Stories" title="Families finding their place" subtitle="Real journeys from families across the province." />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.name} className="rounded-3xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
              <p className="font-display text-xl italic leading-snug">"{s.quote}"</p>
              <p className="mt-6 text-sm font-bold">{s.name}</p>
              <p className="text-xs text-brand-ink/60">{s.town}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}