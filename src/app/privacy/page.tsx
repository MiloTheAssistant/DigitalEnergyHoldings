import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Digital Energy Holdings website visitors.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050608] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm text-[#f3d687]" href="/">Back to home</Link>
        <h1 className="mt-8 text-4xl font-semibold">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            Digital Energy Holdings collects information submitted through
            contact and inquiry forms so we can respond to requests, evaluate
            fit, and provide relevant follow-up.
          </p>
          <p>
            Contact information may be delivered by email and handled by trusted
            service providers used to operate the website. Do not submit tax
            records, wallet details, banking details, passwords, custody
            information, or other confidential information through public forms.
          </p>
          <p>
            To request access, correction, or deletion of submitted information,
            contact <a className="text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </article>
    </main>
  );
}
