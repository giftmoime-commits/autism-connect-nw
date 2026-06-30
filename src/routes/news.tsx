import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { news } from "@/lib/data";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News & Events — Autism Schools NW" }, { name: "description", content: "Latest news, workshops and events." }] }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="News" title="What's happening across the province" subtitle="Workshops, awareness campaigns and open-day announcements." />
      <section className="py-10">
        <div className="mx-auto max-w-4xl space-y-4 px-6">
          {news.map((n) => (
            <article key={n.id} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">{new Date(n.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{n.title}</h3>
              <p className="mt-2 text-brand-ink/70">{n.excerpt}</p>
              <button className="mt-3 text-sm font-semibold text-brand-blue">Read more →</button>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}