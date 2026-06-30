import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — Autism Schools NW" }] }),
  component: AuthPage,
});

const roles = ["Parent", "School", "Volunteer", "Administrator"] as const;

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [role, setRole] = useState<(typeof roles)[number]>("Parent");
  return (
    <SiteLayout>
      <section className="grid min-h-[80dvh] grid-cols-1 lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">Autism Schools NW</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">Welcome back to the community.</h2>
            <p className="mt-4 max-w-md text-white/80">Track your application, manage volunteer schedules, or sign in as a school to review new placements.</p>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>✓ Secure email & password authentication</li>
            <li>✓ POPIA-compliant data handling</li>
            <li>✓ Email verification & forgotten-password recovery</li>
          </ul>
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <div className="mb-6 flex gap-1 rounded-full bg-slate-100 p-1 text-sm font-semibold">
              {(["signin", "signup", "forgot"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`flex-1 rounded-full py-2 transition-colors ${mode === m ? "bg-white text-brand-blue shadow-sm" : "text-brand-ink/60"}`}>
                  {m === "signin" ? "Sign in" : m === "signup" ? "Create account" : "Forgot"}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-brand-ink/70 mb-2">I am a…</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <button key={r} onClick={() => setRole(r)} className={`rounded-full px-3 py-1 text-xs font-semibold ${role === r ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-ink/60"}`}>{r}</button>
                ))}
              </div>
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {mode === "signup" && <input className={inputCls} placeholder="Full name" required />}
              <input className={inputCls} type="email" placeholder="Email" required />
              {mode !== "forgot" && <input className={inputCls} type="password" placeholder="Password" required />}
              <button className="w-full rounded-full bg-brand-blue py-3 font-bold text-white hover:bg-brand-blue-dark">
                {mode === "signin" ? `Sign in as ${role}` : mode === "signup" ? "Create account" : "Send reset link"}
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-brand-ink/50">By continuing you agree to our terms & privacy policy.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";