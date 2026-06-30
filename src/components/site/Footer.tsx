import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-md bg-brand-blue" />
              <span className="font-display text-xl font-bold">Autism Schools NW</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-brand-ink/60">
              A community directory for families across the North West Province of South Africa.
              Built with care, free to use.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-brand-ink/60">Explore</h5>
            <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
              <li><Link to="/schools" className="hover:text-brand-blue">Schools</Link></li>
              <li><Link to="/psychologists" className="hover:text-brand-blue">Psychologists</Link></li>
              <li><Link to="/clinics" className="hover:text-brand-blue">Clinics</Link></li>
              <li><Link to="/activities" className="hover:text-brand-blue">Activities</Link></li>
              <li><Link to="/news" className="hover:text-brand-blue">News</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-brand-ink/60">Get involved</h5>
            <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
              <li><Link to="/apply" className="hover:text-brand-blue">Apply for a school</Link></li>
              <li><Link to="/volunteer" className="hover:text-brand-blue">Volunteer</Link></li>
              <li><Link to="/donate" className="hover:text-brand-blue">Donate</Link></li>
              <li><Link to="/partner" className="hover:text-brand-blue">Become a partner</Link></li>
              <li><Link to="/feedback" className="hover:text-brand-blue">Send feedback</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-6 text-xs text-brand-ink/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Autism Schools North West Province. A community initiative.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand-blue">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-blue">Terms</Link>
            <Link to="/accessibility" className="hover:text-brand-blue">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}