import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/schools", label: "Schools" },
  { to: "/apply", label: "Apply" },
  { to: "/psychologists", label: "Psychologists" },
  { to: "/clinics", label: "Clinics" },
  { to: "/activities", label: "Activities" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-8 rounded-lg bg-brand-blue" />
          <span className="font-display text-lg font-bold tracking-tight text-brand-blue">
            Autism Schools NW
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-brand-ink/70 hover:text-brand-blue transition-colors"
              activeProps={{ className: "text-brand-blue font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <Link
            to="/auth"
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition-transform active:scale-95 hover:bg-brand-blue-dark"
          >
            Sign In
          </Link>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden rounded-md p-2 text-brand-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white px-6 py-4">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-brand-ink/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/auth"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center font-semibold text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}