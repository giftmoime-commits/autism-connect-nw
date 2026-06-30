import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/partner")({
  head: () => ({ meta: [{ title: "Become a Partner — Autism Schools NW" }] }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Partner" title="Work with us" subtitle="Schools, NGOs and corporates — let's expand access together." />
      <section className="py-10">
        <form className="mx-auto max-w-2xl space-y-4 rounded-3xl bg-white p-8 ring-1 ring-black/5">
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Organisation name" />
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Contact person" />
          <input className="w-full rounded-lg border border-black/10 px-3 py-2" type="email" placeholder="Email" />
          <select className="w-full rounded-lg border border-black/10 px-3 py-2">
            <option>Partnership type…</option>
            <option>School / education</option>
            <option>Healthcare provider</option>
            <option>NGO / civil society</option>
            <option>Corporate sponsor</option>
          </select>
          <textarea rows={5} className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Tell us about your work…" />
          <button type="button" className="w-full rounded-full bg-brand-blue py-3 font-bold text-white">Send enquiry</button>
        </form>
      </section>
    </SiteLayout>
  );
}