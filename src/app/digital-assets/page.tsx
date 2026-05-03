import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Database,
  Factory,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Digital Assets",
  description:
    "Digital Energy Holdings frames Bitcoin, crypto mining, local full-node participation, and company-owned digital assets through disciplined governance and digital energy infrastructure.",
  alternates: {
    canonical: `${siteConfig.url}/digital-assets`,
  },
};

const footprint = [
  {
    icon: Factory,
    title: "Hosted mining",
    body: "A small hosted mining footprint gives DEH direct exposure to real-world compute operations without publishing sensitive operational details.",
  },
  {
    icon: Cpu,
    title: "Local managed mining",
    body: "Local equipment is deployed and managed as a practical piece of the company’s digital energy learning loop.",
  },
  {
    icon: Network,
    title: "Full Bitcoin node",
    body: "A locally operated full node supports sovereignty, verification, and deeper fluency with Bitcoin infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Treasury governance",
    body: "Company-owned digital assets are handled through separation, documentation, policy, and accounting-aware controls.",
  },
];

export default function DigitalAssetsPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_8%,rgba(34,211,238,0.16),transparent_26%),linear-gradient(135deg,rgba(214,178,94,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white" href="/">
            <ArrowLeft className="size-4" />
            Back to Digital Energy Holdings
          </Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="inline-flex rounded border border-[#d6b25e]/30 bg-[#d6b25e]/10 px-3 py-1 text-sm text-[#f3d687]">
                Digital Energy Compute Solutions™
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
                Digital assets are infrastructure, not theatre.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                DEH treats Bitcoin, crypto mining, node operation, and
                company-owned digital assets as a governed digital energy
                footprint. The public story is disciplined: compute, custody
                awareness, accounting separation, policy, and operational
                learning.
              </p>
            </div>
            <div className="border border-white/10 bg-[#090d14] p-6">
              <div className="grid gap-4">
                {["Bitcoin", "Mining", "Full node", "Treasury policy"].map((item) => (
                  <div className="flex items-center justify-between border border-white/10 bg-white/[0.04] p-4" key={item}>
                    <span className="text-sm text-slate-200">{item}</span>
                    <span className="h-px w-16 bg-[#d6b25e]/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090d14] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {footprint.map((item) => {
            const Icon = item.icon;
            return (
              <article className="border border-white/10 bg-[#050608] p-5" key={item.title}>
                <Icon className="size-6 text-[#f3d687]" />
                <h2 className="mt-6 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Operating posture</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Small footprint. Core capability. Controlled signal.
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              {
                icon: Zap,
                title: "Compute as an operating asset",
                body: "Mining is treated as part of a broader compute and digital energy capability, not as a public investment pitch.",
              },
              {
                icon: LockKeyhole,
                title: "Private controls stay private",
                body: "Wallet details, custody arrangements, equipment locations, account names, hash rates, and private counterparties stay off the public website.",
              },
              {
                icon: Database,
                title: "Accounting-aware treasury discipline",
                body: "The site may describe governed company-owned assets, but it does not solicit investment, custody assets for others, or provide financial advice.",
              },
              {
                icon: RadioTower,
                title: "Bitcoin infrastructure fluency",
                body: "Operating a full node and mining footprint gives DEH practical literacy in the systems it describes publicly.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article className="flex gap-4 border border-white/10 bg-white/[0.04] p-5" key={item.title}>
                  <Icon className="mt-1 size-6 shrink-0 text-[#f3d687]" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#090d14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border border-[#d6b25e]/20 bg-[#050608] p-8">
          <p className="text-sm font-semibold text-[#f3d687]">Important notice</p>
          <p className="mt-4 leading-7 text-slate-300">
            Digital Energy Holdings is not presenting this page as an
            investment offering, fund, broker, exchange, custodian, bank, or
            investment advisor. Digital asset information is provided as company
            identity and operating-infrastructure context only.
          </p>
          <Link
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f]"
            href="/#contact"
          >
            Contact DEH
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
