import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility — Autism Schools NW" }] }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Accessibility" title="Built to be used by everyone" subtitle="We aim to meet WCAG 2.1 AA across the site." />
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-sm text-brand-ink/80">
          <p>Our goals include: high colour-contrast, large readable type, keyboard navigation on every page, alt text on every image, screen-reader friendly markup and plain-language content.</p>
          <p>If something on this site is hard to use, please email <a className="text-brand-blue underline" href="mailto:access@autismschoolsnw.org.za">access@autismschoolsnw.org.za</a> and we will fix it promptly.</p>
        </div>
      </section>
    </SiteLayout>
  );
}