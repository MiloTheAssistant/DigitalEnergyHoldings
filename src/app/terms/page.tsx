import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Digital Energy Holdings website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050608] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm text-[#f3d687]" href="/">Back to home</Link>
        <h1 className="mt-8 text-4xl font-semibold">Terms of Use</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            This website provides general company information about {siteConfig.legalName}.
            It does not create a client, advisory, fiduciary, custody, banking,
            brokerage, or investment relationship.
          </p>
          <p>
            Digital asset references are informational company-context only and
            are not an offer to sell securities, solicit investment, provide
            custody, or provide financial advice.
          </p>
          <p>
            Website content may change as the Digital Energy operating ecosystem
            evolves. Contact {siteConfig.email} for official inquiries.
          </p>
        </div>
      </article>
    </main>
  );
}
