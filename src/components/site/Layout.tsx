import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-brand-bg font-sans text-brand-ink antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-brand-ink/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}