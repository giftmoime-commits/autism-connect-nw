import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { schools } from "@/lib/data";
import { MapPin, Mail, Phone, User, Bus, Home, Wallet, ArrowLeft, Download, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/schools/$schoolId")({
  head: ({ params }) => {
    const school = schools.find((s) => s.id === params.schoolId);
    const title = school ? `${school.name} — Autism Schools NW` : "School";
    const desc = school?.description ?? "School details";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(school ? [{ property: "og:image" as const, content: school.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const school = schools.find((s) => s.id === params.schoolId);
    if (!school) throw notFound();
    return { school };
  },
  component: SchoolDetail,
});

function SchoolDetail() {
  const { school } = Route.useLoaderData();
  const mapsQ = encodeURIComponent(`${school.name}, ${school.address}`);
  return (
    <SiteLayout>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link to="/schools" className="inline-flex items-center gap-2 text-sm text-brand-ink/60 hover:text-brand-blue">
            <ArrowLeft size={16} /> All schools
          </Link>
        </div>
      </div>
      <section className="bg-white pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl">
            <img src={school.image} alt={school.name} className="h-80 w-full object-cover md:h-96" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal">{school.town}</span>
              <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{school.name}</h1>
              <p className="mt-4 text-lg text-brand-ink/70">{school.description}</p>

              <h2 className="mt-10 font-display text-2xl font-bold">Our vision</h2>
              <p className="mt-2 text-brand-ink/70 italic">"{school.vision}"</p>

              <h2 className="mt-10 font-display text-2xl font-bold">Facilities</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {school.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-teal" /> {f}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display text-2xl font-bold">Admission process</h2>
              <ol className="mt-4 space-y-3 text-sm text-brand-ink/70">
                <li><b>1.</b> Submit our online application form with required documents.</li>
                <li><b>2.</b> School reviews medical and psychologist reports (up to 14 days).</li>
                <li><b>3.</b> Family is invited for an observation visit.</li>
                <li><b>4.</b> Placement offer issued; first-month fees confirm the seat.</li>
              </ol>

              <h2 className="mt-10 font-display text-2xl font-bold">Required documents</h2>
              <Link to="/required-documents" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">See full checklist →</Link>

              <h2 className="mt-10 font-display text-2xl font-bold">Downloads</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Application Form", "Medical Form", "Consent Form"].map((d) => (
                  <button key={d} className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold hover:bg-slate-200">
                    <Download size={14} /> {d}
                  </button>
                ))}
              </div>

              <h2 className="mt-10 font-display text-2xl font-bold">Find us</h2>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-black/5">
                <iframe
                  title="School location"
                  width="100%"
                  height="320"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
                />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-brand-bg p-6 ring-1 ring-black/5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Contact</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3"><User size={16} className="mt-0.5 text-brand-blue" /> {school.principal}</li>
                  <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-brand-blue" /> {school.address}</li>
                  <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-brand-blue" /> <a href={`tel:${school.phone}`} className="hover:underline">{school.phone}</a></li>
                  <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-brand-blue" /> <a href={`mailto:${school.email}`} className="break-all hover:underline">{school.email}</a></li>
                </ul>
                <Link to="/apply" className="mt-6 block w-full rounded-2xl bg-brand-blue py-3 text-center text-sm font-bold text-white hover:bg-brand-blue-dark">
                  Apply Now
                </Link>
              </div>
              <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Quick facts</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex justify-between"><span className="text-brand-ink/60">Ages</span><b>{school.ageMin}–{school.ageMax}</b></li>
                  <li className="flex justify-between"><span className="text-brand-ink/60">Gender</span><b>{school.gender}</b></li>
                  <li className="flex justify-between"><span className="text-brand-ink/60">Type</span><b>{school.type}</b></li>
                  <li className="flex justify-between"><span className="text-brand-ink/60">Fees</span><b>{school.fees}</b></li>
                  <li className="flex justify-between items-center"><span className="text-brand-ink/60 flex items-center gap-1"><Home size={14} /> Boarding</span><b>{school.boarding ? "Yes" : "No"}</b></li>
                  <li className="flex justify-between items-center"><span className="text-brand-ink/60 flex items-center gap-1"><Bus size={14} /> Transport</span><b>{school.transport ? "Yes" : "No"}</b></li>
                  <li className="flex justify-between items-center"><span className="text-brand-ink/60 flex items-center gap-1"><Wallet size={14} /> Spaces</span><b className={school.spaces > 0 ? "text-emerald-600" : "text-brand-ink/40"}>{school.spaces}</b></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}