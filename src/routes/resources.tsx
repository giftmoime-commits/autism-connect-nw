import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Heart, HandCoins, GraduationCap, Bus, BookOpen, Users, Download } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Community Resources — Autism Schools NW" }, { name: "description", content: "Support groups, grants, transport assistance and educational resources." }] }),
  component: ResourcesPage,
});

const items = [
  { icon: Heart, title: "Autism Support Groups", body: "Find a parent or caregiver group in your town. Monthly meetings and a private WhatsApp circle." },
  { icon: HandCoins, title: "Government Grants", body: "Care Dependency Grant and Disability Grant — eligibility and how to apply at SASSA." },
  { icon: HandCoins, title: "Disability Funding", body: "Bursaries and NGO funding for therapy, devices and assistive technology." },
  { icon: Bus, title: "Transport Assistance", body: "Subsidised school transport routes in Mahikeng, Rustenburg, Klerksdorp and Potchefstroom." },
  { icon: GraduationCap, title: "Educational Resources", body: "Visual schedules, social stories, communication boards and free printables." },
  { icon: Users, title: "Parent Workshops", body: "Free workshops on meltdown management, behaviour and toilet-training." },
  { icon: BookOpen, title: "Reading List", body: "Curated books and research articles — for parents, teachers and clinicians." },
  { icon: Download, title: "Downloads", body: "Application form, medical form, IEP templates and our parent handbook (PDF)." },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Community" title="Resources for families" subtitle="Funding, transport, support groups and learning tools — all in one place." />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"><Icon /></div>
              <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-brand-ink/70">{body}</p>
              <button className="mt-4 text-sm font-semibold text-brand-blue">Learn more →</button>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}