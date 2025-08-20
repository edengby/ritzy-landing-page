"use client";

import { motion } from "framer-motion";
import { Building2, KeyRound, ShieldCheck, Users, Zap } from "lucide-react";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Page() {
  return (
      <>
        <Nav />

        {/* HERO */}
        <main className="container-max pt-16 sm:pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
            <span className="badge mb-5">
              <Zap className="h-4 w-4" /> Smart Access, Real Peace of Mind
            </span>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                Building Management,
                <br />
                <span className="text-accent">simple</span>, secure, and{" "}
                <span className="text-accent2">delightful</span>.
              </h1>
              <p className="mt-6 text-slate-300 max-w-xl">
                Ritzy unifies door control, resident credentials, visitor passes, and logs in
                a single, modern platform. Operate from anywhere, with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">Book a demo</a>
                <a href="#features" className="btn btn-ghost">See how it works</a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <Stat label="Doors online" value="1,240" />
                <Stat label="Residents served" value="18k+" />
                <Stat label="Avg. unlock time" value="120ms" />
              </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-4 lg:p-6"
            >
              {/* Palette-matching mock */}
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-panel px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-accent/20 border border-accent/30 grid place-items-center">
                      <Building2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">The Dakota</p>
                      <p className="text-xs text-slate-400">123 Main St, New York</p>
                    </div>
                  </div>
                  <span className="badge">America/New_York</span>
                </div>

                <div className="grid sm:grid-cols-4 gap-4 p-4">
                  <Tile icon={<KeyRound className="h-4 w-4" />} label="Doors" value="1" />
                  <Tile icon={<Users className="h-4 w-4" />} label="Residents" value="11" />
                  <Tile icon={<Building2 className="h-4 w-4" />} label="Vacant Apts" value="4" />
                  <Tile icon={<ShieldCheck className="h-4 w-4" />} label="Accesses" value="5" />
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* FEATURES */}
        <Section id="features" title="Everything you need, nothing you don’t" kicker="Capabilities">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
                icon={<KeyRound className="h-5 w-5 text-accent" />}
                title="Instant mobile keys"
                text="Issue, revoke, and time-limit credentials in a click. No plastic, no headaches."
            />
            <Feature
                icon={<ShieldCheck className="h-5 w-5 text-accent" />}
                title="Audit-grade security"
                text="Tamper-proof logs, SSO for staff, and fine-grained roles out of the box."
            />
            <Feature
                icon={<Users className="h-5 w-5 text-accent" />}
                title="Resident & visitor passes"
                text="Beautiful resident app and QR visitor links with auto-expiration."
            />
            <Feature
                icon={<Building2 className="h-5 w-5 text-accent" />}
                title="Portfolio view"
                text="Multi-building dashboards, health checks, and alerts in real time."
            />
            <Feature
                icon={<Zap className="h-5 w-5 text-accent" />}
                title="Fast & reliable"
                text="Sub-200ms unlocks with edge caching and resilient websockets."
            />
            <Feature
                icon={<KeyRound className="h-5 w-5 text-accent" />}
                title="Easy integrations"
                text="Webhooks & APIs to connect CRMs, intercoms, and your ops tools."
            />
          </div>
        </Section>

        {/* PRICING */}
        <Section id="pricing" title="Simple pricing that scales" kicker="Pricing">
          <div className="grid md:grid-cols-3 gap-6">
            <Pricing
                name="Starter"
                price="$49"
                period="/building/mo"
                items={["Up to 2 doors", "Unlimited residents", "Email support"]}
                cta="Start free"
            />
            <Pricing
                name="Growth"
                highlight
                price="$149"
                period="/building/mo"
                items={["Up to 10 doors", "Visitor links", "Priority support"]}
                cta="Talk to sales"
            />
            <Pricing
                name="Enterprise"
                price="Custom"
                period=""
                items={["Unlimited doors", "SSO & SAML", "SLA & Onboarding"]}
                cta="Contact us"
            />
          </div>
        </Section>

        {/* CONTACT / CTA */}
        <Section id="contact" title="Ready to modernize your access?">
          <div className="card p-6 sm:p-8">
            <form
                className="grid sm:grid-cols-3 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll get back to you shortly.");
                }}
            >
              <input
                  className="w-full rounded-xl bg-panel border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                  required
              />
              <input
                  type="email"
                  className="w-full rounded-xl bg-panel border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Work email"
                  required
              />
              <button className="btn btn-primary w-full" type="submit">
                Request demo
              </button>
            </form>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" title="Frequently asked questions">
          <div className="grid sm:grid-cols-2 gap-6">
            <FAQ q="Does Ritzy work with our existing doors?" a="Yes — we integrate with most modern relays and readers. If you're unsure, we’ll check your hardware during onboarding." />
            <FAQ q="Is there a resident app?" a="Yep. iOS/Android for mobile unlocks, digital keys, and visitor passes." />
            <FAQ q="How fast are unlocks?" a="Typical latency is 80–200ms depending on network conditions." />
            <FAQ q="Do you offer SSO?" a="SAML/SSO is available on the Enterprise plan." />
          </div>
        </Section>

        <Footer />
      </>
  );
}

function Tile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
      <div className="rounded-xl border border-border bg-panel p-4">
        <div className="flex items-center gap-3 text-slate-300">
        <span className="h-9 w-9 rounded-lg bg-accent/15 border border-accent/30 grid place-items-center text-accent">
          {icon}
        </span>
          <div>
            <p className="text-xs text-slate-400">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
          </div>
        </div>
      </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
      <div className="card p-5">
        <div className="flex items-center gap-3 mb-3">
        <span className="h-9 w-9 rounded-lg bg-accent/15 border border-accent/30 grid place-items-center text-accent">
          {icon}
        </span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-slate-300">{text}</p>
      </div>
  );
}

function Pricing({
                   name,
                   price,
                   period,
                   items,
                   cta,
                   highlight
                 }: {
  name: string;
  price: string;
  period: string;
  items: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
      <div className={`card p-6 relative ${highlight ? "outline outline-2 outline-accent/40" : ""}`}>
        {highlight && <span className="absolute -top-3 left-6 badge">Most popular</span>}
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="mt-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-slate-400">{period}</span>
        </div>
        <ul className="mt-6 space-y-2 text-slate-300">
          {items.map((it) => (
              <li key={it} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-accent rounded-full" />
                {it}
              </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-ghost mt-6">{cta}</a>
      </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
      <div className="text-left">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-slate-400 mt-1">{label}</div>
      </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
      <div className="card p-5">
        <h4 className="font-semibold mb-2">{q}</h4>
        <p className="text-slate-300">{a}</p>
      </div>
  );
}
