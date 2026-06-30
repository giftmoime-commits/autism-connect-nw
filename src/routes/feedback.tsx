import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({ meta: [{ title: "Feedback — Autism Schools NW" }] }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader eyebrow="Feedback" title="Help us improve" subtitle="Tell us what worked, what didn't, and what's missing." />
      <section className="py-10">
        {sent ? (
          <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center ring-1 ring-black/5">
            <h3 className="font-display text-2xl font-bold">Thanks for your feedback</h3>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 ring-1 ring-black/5">
            <div>
              <p className="text-xs font-semibold text-brand-ink/70">How was your experience?</p>
              <div className="mt-2 flex gap-1 text-3xl">
                {[1,2,3,4,5].map((n) => (
                  <button type="button" key={n} onClick={() => setRating(n)} className={n <= rating ? "text-brand-orange" : "text-slate-300"}>★</button>
                ))}
              </div>
            </div>
            <input className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Name (optional)" />
            <input type="email" className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Email (optional)" />
            <textarea rows={5} required className="w-full rounded-lg border border-black/10 px-3 py-2" placeholder="Your feedback" />
            <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white">Send feedback</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}