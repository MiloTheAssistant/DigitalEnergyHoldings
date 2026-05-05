import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Boxes,
  Cpu,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, type ecosystemLanes } from "@/lib/site-config";

type EcosystemLane = (typeof ecosystemLanes)[number];

const iconBySlug: Record<EcosystemLane["slug"], LucideIcon> = {
  "compute-solutions": Cpu,
  "ai-concepts": Bot,
  media: FileText,
  "st-louis-creations": Boxes,
};

export function EcosystemLanePage({ lane }: { lane: EcosystemLane }) {
  const Icon = iconBySlug[lane.slug];

  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,6,8,0.98)_0%,rgba(9,13,20,0.92)_52%,rgba(15,36,43,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,178,94,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white" href="/#ecosystem">
            <ArrowLeft className="size-4" />
            Back to ecosystem
          </Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <div>
              <p className="inline-flex rounded border border-[#d6b25e]/30 bg-[#d6b25e]/10 px-3 py-1 text-sm text-[#f3d687]">
                {lane.name}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
                {lane.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {lane.summary}
              </p>
            </div>
            <div className="border border-white/10 bg-[#050608]/72 p-6 backdrop-blur">
              <Icon className="size-10 text-[#f3d687]" />
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-slate-500">
                Public lane
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{lane.shortName}</h2>
              <p className="mt-4 leading-7 text-slate-400">{lane.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090d14] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {lane.focusAreas.map((item, index) => (
            <article className="border border-white/10 bg-[#050608] p-5" key={item}>
              <p className="font-mono text-xs text-[#f3d687]">0{index + 1}</p>
              <h2 className="mt-5 text-lg font-semibold">{item}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Operating discipline</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Built as a lane, governed by the holding layer.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              This public lane can move quickly because ownership, digital rights,
              domains, systems, and reusable assets remain organized through
              {` ${siteConfig.name}`}.
            </p>
          </div>
          <div className="grid gap-4">
            {lane.operatingSignals.map((signal) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={signal}>
                <p className="leading-7 text-slate-200">{signal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090d14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 border border-[#d6b25e]/20 bg-[#050608] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Contact</p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              For inquiries related to {lane.shortName}, use the official DEH
              contact channel: {siteConfig.email} or {siteConfig.phone}.
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
