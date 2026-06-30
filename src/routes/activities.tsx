import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { activities } from "@/lib/data";
import { Calendar, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/activities")({
  head: () => ({ meta: [{ title: "Activities — Autism Schools NW" }, { name: "description", content: "Therapeutic and recreational activities for autistic children across the North West." }] }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Activities" title="Programmes & weekly clubs" subtitle="From music therapy to horse-riding — find an activity that suits your child." />
      <section className="py-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article key={a.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-sm">
              <img src={a.image} alt={a.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/70">{a.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-brand-ink/70">
                  <li className="flex items-center gap-2"><Users size={14} className="text-brand-blue" /> Ages {a.ageRange}</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> {a.town}</li>
                  <li className="flex items-center gap-2"><Calendar size={14} className="text-brand-blue" /> {a.schedule}</li>
                </ul>
                <button className="mt-5 w-full rounded-xl bg-brand-teal py-2.5 text-sm font-bold text-white hover:brightness-110">Book activity</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}