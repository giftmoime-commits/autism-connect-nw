import { Link } from "@tanstack/react-router";
import type { School } from "@/lib/data";

export function SchoolCard({ school }: { school: School }) {
  const spacesBadge =
    school.spaces > 0
      ? { text: `${school.spaces} space${school.spaces > 1 ? "s" : ""} open`, color: "bg-brand-orange/10 text-brand-orange" }
      : { text: "Waitlist only", color: "bg-slate-100 text-brand-ink/50" };

  return (
    <Link
      to="/schools/$schoolId"
      params={{ schoolId: school.id }}
      className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={school.image}
          alt={`${school.name} campus`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-teal">
            {school.town}
          </span>
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${spacesBadge.color}`}>
            {spacesBadge.text}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight">{school.name}</h3>
        <p className="mt-2 text-sm text-brand-ink/60 line-clamp-2">{school.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-brand-ink/60">
          <span>Ages {school.ageMin}–{school.ageMax}</span>
          <span>{school.type}</span>
          <span>{school.fees}</span>
        </div>
      </div>
    </Link>
  );
}