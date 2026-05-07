import Link from "next/link";
import NextImage from "next/image";
import {
  ArrowRight,
  Bot,
  Boxes,
  Cpu,
  Database,
  FileSignature,
  KeyRound,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ecosystemLanes, homepageSignals, siteConfig } from "@/lib/site-config";

const assetPillars = [
  {
    icon: KeyRound,
    title: "IP and rights",
    body: "Centralized control for brands, domains, websites, content, digital rights, design systems, and reusable business assets.",
  },
  {
    icon: Bot,
    title: "AI operating rails",
    body: "Automation, agents, workflows, content systems, and applied intelligence that support operating-company execution.",
  },
  {
    icon: FileSignature,
    title: "Contract clarity",
    body: "A cleaner public explanation for bankers, CPAs, vendors, partners, and counterparties that need to understand the structure.",
  },
  {
    icon: ShieldCheck,
    title: "Governed assets",
    body: "Company-owned digital asset activity framed through policy, separation, controls, and accounting discipline.",
  },
];

const architecture = [
  {
    title: "Scott Holdings Corp",
    eyebrow: "Umbrella layer",
    body: "The broader long-term governance and capital allocation layer. Mentioned lightly here for context, not presented as the day-to-day operating face.",
  },
  {
    title: "Digital Energy Holdings",
    eyebrow: "Asset and systems layer",
    body: "The Digital Energy company that centralizes IP, digital rights, brand systems, AI workflows, contracts, shared services, and governed digital assets.",
  },
  {
    title: "Operating companies and d/b/a lanes",
    eyebrow: "Execution layer",
    body: "Customer-facing services, media, compute, AI, production, and future operating properties move faster when the asset layer is clear.",
  },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050608]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-9 place-items-center rounded border border-[#d6b25e]/40 bg-[#d6b25e]/10 text-sm font-semibold text-[#f3d687]">
            DEH
          </span>
          <span className="text-sm font-semibold text-white">
            Digital Energy Holdings
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="inline-flex h-10 items-center justify-center gap-2 rounded border border-[#d6b25e]/40 px-4 text-sm font-medium text-[#f3d687] transition hover:bg-[#d6b25e]/10"
          href="/#contact"
        >
          Contact
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <Header />
      <section className="relative isolate min-h-screen overflow-hidden pt-16">
        <NextImage
          alt=""
          className="object-cover object-center opacity-72"
          fill
          priority
          sizes="100vw"
          src="/brand/digital-energy-holdings-hero.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050608_0%,rgba(5,6,8,0.94)_34%,rgba(5,6,8,0.50)_70%,rgba(5,6,8,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.42),rgba(5,6,8,0.18)_42%,rgba(5,6,8,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(214,178,94,0.18),transparent_31%),radial-gradient(circle_at_72%_72%,rgba(34,211,238,0.16),transparent_34%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-[22rem] min-w-0 sm:max-w-3xl">
            <p className="mb-6 inline-flex rounded border border-[#d6b25e]/30 bg-[#d6b25e]/10 px-3 py-1 text-sm text-[#f3d687]">
              Digital Energy Holdings
            </p>
            <h1 className="max-w-[11ch] text-5xl font-semibold leading-tight text-white sm:max-w-3xl sm:text-6xl sm:leading-none lg:text-7xl" style={{ textShadow: "0 24px 70px rgba(0,0,0,0.95)" }}>
              Where compute becomes capital.
            </h1>
            <p className="mt-6 max-w-[21rem] text-base leading-7 text-slate-100 sm:max-w-2xl sm:text-lg sm:leading-8" style={{ textShadow: "0 12px 36px rgba(0,0,0,0.95)" }}>
              Digital Energy Holdings centralizes intellectual property,
              digital rights, brand systems, domains, AI workflows, contracts,
              shared services, and governed digital asset infrastructure behind
              a modern operating ecosystem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f]"
                href="#architecture"
              >
                View the architecture
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded border border-white/15 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="/digital-assets"
              >
                Digital Assets
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {homepageSignals.map((signal) => (
                <span
                  className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                  key={signal}
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090d14] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            ["Legal identity", siteConfig.legalName],
            ["Public contact", siteConfig.email],
            ["Phone", siteConfig.phone],
            ["Position", "Asset, systems, and shared-services layer"],
          ].map(([label, value]) => (
            <div className="border-l border-[#d6b25e]/30 pl-4" key={label}>
              <p className="text-xs uppercase text-slate-500">{label}</p>
              <p className="mt-2 text-sm text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#f3d687]">The problem</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Operating companies get fragile when their assets are scattered.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Brands, domains, websites, systems, contracts, content, AI
              workflows, and digital assets need clear ownership. When they are
              spread across the wrong places, banking, accounting, vendor
              relationships, licensing, and future growth become harder than
              they need to be.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {assetPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="border border-white/10 bg-white/[0.04] p-5" key={pillar.title}>
                  <Icon className="size-6 text-[#f3d687]" />
                  <h3 className="mt-6 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-[#090d14] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#f3d687]">Operating architecture</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Assets stay centralized. Operations stay focused. Contracts stay clean.
              </h2>
            </div>
            <div className="grid gap-4">
              {architecture.map((layer, index) => (
                <article className="relative border border-white/10 bg-[#050608] p-6" key={layer.title}>
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded border border-[#d6b25e]/30 bg-[#d6b25e]/10 font-mono text-sm text-[#f3d687]">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500">{layer.eyebrow}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{layer.title}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{layer.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="asset-layer" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Asset layer</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A holding company built for a digitally energized world.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              DEH gives the ecosystem a disciplined layer for ownership,
              infrastructure, and operating support. AI systems, automation,
              digital rights, contract paths, brand assets, and digital energy
              infrastructure can compound when they are organized with intent.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Intellectual property", KeyRound],
              ["Domains and websites", Network],
              ["AI and automation", Sparkles],
              ["Digital asset governance", Database],
              ["Compute systems", Cpu],
              ["Shared services", Boxes],
              ["Contract frameworks", FileSignature],
              ["Signal infrastructure", RadioTower],
            ].map(([title, icon]) => {
              const Icon = icon as typeof KeyRound;
              return (
                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] p-4" key={title as string}>
                  <Icon className="size-5 text-[#f3d687]" />
                  <span className="text-sm text-slate-200">{title as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="bg-[#090d14] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#f3d687]">Ecosystem lanes</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Four public lanes under one asset and systems company.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ecosystemLanes.map((lane) => (
              <article className="border border-white/10 bg-[#050608] p-6" key={lane.name}>
                <p className="text-sm text-[#f3d687]">{lane.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{lane.name}</h3>
                <p className="mt-4 leading-7 text-slate-400">{lane.description}</p>
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

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border border-white/10 bg-[linear-gradient(135deg,rgba(214,178,94,0.12),rgba(8,10,15,0.96)_40%,rgba(34,211,238,0.08))] p-8 lg:grid-cols-[1fr_0.65fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Digital Assets</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Bitcoin, mining, nodes, and treasury strategy belong inside a governed operating structure.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Digital asset activity is a small but core part of the DEH
              footprint: hosted mining, local managed mining equipment, local
              full-node participation, and disciplined treasury controls.
            </p>
          </div>
          <div className="flex items-end">
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#d6b25e] px-5 text-sm font-semibold text-[#08090d] transition hover:bg-[#f1d27f]"
              href="/digital-assets"
            >
              Explore Digital Assets
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#090d14] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-[#f3d687]">Contact DEH</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Reach the right company layer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              For banking, vendor, contract, brand, licensing,
              operating-company, AI, automation, compute, or digital asset
              inquiries, contact Digital Energy Holdings through the official
              company channel.
            </p>
          </div>
          <div className="border border-white/10 bg-[#050608] p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">{siteConfig.legalName}</p>
            <div className="mt-3 grid gap-1">
              <p>
                Contact email:{" "}
                <a className="text-slate-100" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Contact phone:{" "}
                <a className="text-slate-100" href="tel:+15735000064">
                  {siteConfig.phone}
                </a>
              </p>
              <p>Location: {siteConfig.location}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
