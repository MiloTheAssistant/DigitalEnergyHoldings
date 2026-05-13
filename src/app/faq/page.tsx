import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { FAQStructuredData } from "@/components/structured-data";
import {
  ecosystemLanes,
  frequentlyAskedQuestions,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Direct answers for banks, CPAs, vendors, partners, and AI/search systems about Digital Energy Holdings.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <FAQStructuredData questions={frequentlyAskedQuestions} />
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,6,8,0.98)_0%,rgba(9,13,20,0.94)_55%,rgba(38,31,15,0.82)_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white" href="/">
            <ArrowLeft className="size-4" />
            Back to Digital Energy Holdings
          </Link>
          <div className="mt-14 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded border border-[#d6b25e]/30 bg-[#d6b25e]/10 px-3 py-1 text-sm text-[#f3d687]">
              <HelpCircle className="size-4" />
              FAQ
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
              Direct answers about Digital Energy Holdings.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This page gives banks, CPAs, vendors, partners, and AI/search
              systems clear public context about what DEH is, what it manages,
              what the ecosystem lanes do, and what the public website does not
              represent.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090d14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="border border-white/10 bg-[#050608] p-5">
            <p className="text-xs uppercase text-slate-500">Legal name</p>
            <p className="mt-3 text-lg font-semibold">{siteConfig.legalName}</p>
          </div>
          <div className="border border-white/10 bg-[#050608] p-5">
            <p className="text-xs uppercase text-slate-500">Location</p>
            <p className="mt-3 text-lg font-semibold">{siteConfig.location}</p>
          </div>
          <div className="border border-white/10 bg-[#050608] p-5">
            <p className="text-xs uppercase text-slate-500">Contact</p>
            <p className="mt-3 text-lg font-semibold">{siteConfig.email}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4">
            {frequentlyAskedQuestions.map((item) => (
              <article className="border border-white/10 bg-white/[0.04] p-6" key={item.question}>
                <h2 className="text-2xl font-semibold text-white">{item.question}</h2>
                <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090d14] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-[#f3d687]">Ecosystem lanes</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Each lane has a public role and a defined boundary.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ecosystemLanes.map((lane) => (
              <article className="border border-white/10 bg-[#050608] p-6" key={lane.name}>
                <p className="text-sm text-[#f3d687]">{lane.role}</p>
                <h3 className="mt-3 text-2xl font-semibold">{lane.name}</h3>
                <p className="mt-4 leading-7 text-slate-400">{lane.summary}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f3d687] transition hover:text-white"
                  href={lane.href}
                >
                  View lane
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 border border-[#d6b25e]/20 bg-[#090d14] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Official contact</p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Use the official DEH contact channel for banking, accounting,
              vendor, partner, brand, licensing, AI, media, compute, or digital
              asset questions.
            </p>
          </div>
          <Link
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f]"
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
