import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SchoolCard } from "@/components/site/SchoolCard";
import { schools, stats, towns, activities, news } from "@/lib/data";
import { ArrowRight, Search, Heart, GraduationCap, Stethoscope, HandHeart } from "lucide-react";

const title = "Autism Schools North West Province";
const description =
  "Helping South African families find autism-friendly schools, psychologists, clinics, activities and volunteer opportunities across the North West Province.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = schools.slice(0, 4);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 20%, rgba(37,99,235,0.15), transparent), radial-gradient(50% 50% at 80% 60%, rgba(20,184,166,0.18), transparent), radial-gradient(40% 50% at 60% 90%, rgba(245,158,11,0.18), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-32 text-center md:pt-24">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue ring-1 ring-black/5">
            North West Province · South Africa
          </span>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Autism Schools{" "}
            <span className="italic text-brand-blue">North West Province</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-brand-ink/70 md:text-xl">
            Helping families connect with autism-friendly schools, healthcare professionals,
            support services and volunteers — across Mahikeng, Potchefstroom, Rustenburg,
            Klerksdorp and beyond.
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 md:flex md:justify-center md:gap-4">
            <Link to="/schools" className="rounded-2xl bg-brand-blue px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-blue/25 transition-all hover:-translate-y-1 hover:bg-brand-blue-dark">
              Find Schools
            </Link>
            <Link to="/apply" className="rounded-2xl bg-brand-orange px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-orange/25 transition-all hover:-translate-y-1">
              Apply Now
            </Link>
            <Link to="/volunteer" className="rounded-2xl bg-white px-7 py-4 text-sm font-bold text-brand-blue ring-1 ring-black/5 transition-all hover:bg-slate-50">
              Volunteer
            </Link>
            <Link to="/clinics" className="rounded-2xl bg-brand-teal px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-teal/25 transition-all hover:-translate-y-1">
              Nearby Clinics
            </Link>
          </div>
        </div>

        {/* Quick search */}
        <div className="-mt-20 mb-12 px-6">
          <form
            action="/schools"
            className="mx-auto grid max-w-5xl grid-cols-1 gap-3 rounded-3xl bg-white p-4 shadow-2xl shadow-black/5 ring-1 ring-black/5 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-0 md:p-3"
          >
            <label className="flex flex-col gap-1 px-4 py-2 md:border-r md:border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Town</span>
              <select name="town" className="bg-transparent text-sm font-medium focus:outline-none">
                <option value="">Any town</option>
                {towns.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1 px-4 py-2 md:border-r md:border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">School name</span>
              <input name="q" type="text" placeholder="Search by name…" className="bg-transparent text-sm font-medium focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1 px-4 py-2 md:border-r md:border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Child age</span>
              <select name="age" className="bg-transparent text-sm font-medium focus:outline-none">
                <option value="">Any age</option>
                <option>3–6</option>
                <option>7–12</option>
                <option>13–18</option>
              </select>
            </label>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-brand-blue px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue-dark">
              <Search size={16} /> Search
            </button>
          </form>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-5">
          {[
            { value: stats.schools, label: "Schools", color: "text-brand-blue" },
            { value: `${stats.volunteers}+`, label: "Volunteers", color: "text-brand-teal" },
            { value: stats.psychologists, label: "Psychologists", color: "text-brand-orange" },
            { value: stats.clinics, label: "Clinics", color: "text-brand-blue" },
            { value: stats.programs, label: "Programs", color: "text-brand-teal" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-ink/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured schools */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">Featured</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Schools accepting applications</h2>
            </div>
            <Link to="/schools" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all">
              View all {stats.schools} schools <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => <SchoolCard key={s.id} school={s} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 ring-1 ring-black/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Supporting your journey</h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-ink/60">We guide you through every step of finding the right fit for your child.</p>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
            {[
              { icon: Search, title: "Find a school", body: "Filter by town, age, and available space." , color: "bg-brand-blue/10 text-brand-blue"},
              { icon: GraduationCap, title: "Apply online", body: "One application form, accepted by participating schools.", color: "bg-brand-orange/10 text-brand-orange" },
              { icon: Stethoscope, title: "Connect with care", body: "Psychologists, OTs and clinics near you.", color: "bg-brand-teal/10 text-brand-teal" },
              { icon: HandHeart, title: "Find community", body: "Activities, volunteers, and support groups.", color: "bg-brand-blue/10 text-brand-blue" },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className={`mx-auto flex size-14 items-center justify-center rounded-2xl ${step.color}`}>
                  <step.icon size={22} />
                </div>
                <h4 className="mt-5 font-bold">{step.title}</h4>
                <p className="mt-2 text-sm text-brand-ink/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">Activities</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Things to do this week</h2>
            </div>
            <Link to="/activities" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all">
              See all activities <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {activities.slice(0, 4).map((a) => (
              <div key={a.id} className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img src={a.image} alt={a.title} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">{a.title}</h4>
                  <p className="mt-1 text-xs text-brand-ink/60">{a.town} · {a.schedule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News + Donate CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-brand-blue px-8 py-14 text-white md:px-16">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <Heart className="opacity-80" />
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Help us reach every family.</h2>
                <p className="mt-3 max-w-md text-white/80">
                  This platform is free for parents. Your time or donation keeps it that way.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/donate" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-blue">Donate</Link>
                  <Link to="/volunteer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">Volunteer</Link>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Latest news</h3>
                {news.slice(0, 3).map((n) => (
                  <Link key={n.id} to="/news" className="block rounded-2xl bg-white/10 p-4 hover:bg-white/15">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{n.date}</div>
                    <div className="mt-1 font-semibold">{n.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
