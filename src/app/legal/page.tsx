import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal and brand-use notice for Digital Energy Holdings.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#050608] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm text-[#f3d687]" href="/">Back to home</Link>
        <h1 className="mt-8 text-4xl font-semibold">Legal Notice</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            {siteConfig.legalName} is presented as the Digital Energy asset,
            systems, intellectual property, digital rights, brand, contracts,
            AI workflow, shared-services, and digital asset infrastructure
            company.
          </p>
          <p>
            d/b/a names, brand names, and trademarks displayed on this website
            are used for public company identity and ecosystem clarity. They
            should not be treated as standalone contracting parties unless a
            signed written agreement says otherwise.
          </p>
          <p>
            Private legal, tax, banking, custody, wallet, transaction, equipment
            location, and treasury records are not published through this public
            website.
          </p>
        </div>
      </article>
    </main>
  );
}
