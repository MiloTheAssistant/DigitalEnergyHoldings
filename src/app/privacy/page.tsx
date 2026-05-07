import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Digital Energy Holdings website visitors and inquiry form users.",
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you visit this website, we may collect limited device and usage information such as browser type, pages viewed, referring pages, approximate location derived from network data, and interactions with the site.",
      "When you submit the contact form, we collect the information you choose to provide, including name, email address, company, role, website, inquiry type, and message content.",
      "Do not submit tax records, banking details, wallet details, passwords, custody information, private keys, seed phrases, or other sensitive confidential information through public forms.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use submitted information to respond to inquiries, route requests to the appropriate company layer, evaluate potential business fit, maintain operational records, and protect the security and integrity of the website.",
      "We use site analytics to understand aggregate website performance, improve content, measure traffic sources, and evaluate marketing effectiveness.",
    ],
  },
  {
    title: "Service providers and analytics",
    body: [
      "This website is hosted on Vercel and may use Vercel Analytics to understand site performance and usage.",
      "Contact form submissions are delivered through Microsoft Graph and Microsoft 365 mail infrastructure.",
      "We may use Google Analytics and Meta Pixel to measure website traffic, understand advertising performance, and improve digital marketing. These providers may process device, browser, cookie, and interaction data according to their own privacy terms.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    body: [
      "Cookies, pixels, tags, and similar technologies may be used to operate the site, remember preferences, measure site usage, and support analytics or advertising measurement.",
      "You can control cookies through your browser settings. Blocking cookies may affect some website functionality or measurement features.",
    ],
  },
  {
    title: "Sharing information",
    body: [
      "We may share information with service providers that help operate the website, deliver email, provide analytics, support advertising measurement, maintain security, or assist with business operations.",
      "We may disclose information if required by law, legal process, or a lawful government request, or if necessary to protect rights, safety, security, or the integrity of our systems.",
      "We do not sell personal information submitted through the contact form.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We retain inquiry information for as long as reasonably necessary to respond, maintain business records, satisfy operational needs, resolve disputes, enforce agreements, or comply with legal obligations.",
      "Analytics and advertising platforms may retain data according to their own retention settings and policies.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      "You may request access, correction, or deletion of personal information you submitted to us, subject to legal, security, and operational limitations.",
      "Depending on your location, you may have additional privacy rights under applicable law. To make a request, contact us using the information below.",
      "You can opt out of certain analytics or advertising tracking through browser controls, device settings, industry opt-out tools, and platform-specific settings from Google or Meta.",
    ],
  },
  {
    title: "Minors",
    body: [
      "This website is not intended for children under 13, and we do not knowingly collect personal information from children. If you believe a child provided personal information, contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    title: "Do Not Track",
    body: [
      "Because there is no consistent industry standard for responding to Do Not Track browser signals, we do not currently alter our data practices when such a signal is received.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy as our website, analytics, operations, or legal requirements change. The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050608] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link className="text-sm text-[#f3d687]" href="/">Back to home</Link>
        <p className="mt-8 text-sm font-semibold text-[#f3d687]">
          Effective May 7, 2026
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            This Privacy Policy describes how {siteConfig.legalName} collects,
            uses, and shares information when you visit {siteConfig.url}, submit
            an inquiry, or otherwise interact with this website.
          </p>
          <p>
            This website is primarily an informational corporate website for
            Digital Energy Holdings. It is not an e-commerce checkout, exchange,
            broker, custodian, bank, investment adviser, or financial product
            platform.
          </p>
          {sections.map((section) => (
            <section className="border-t border-white/10 pt-6" key={section.title}>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
          <section className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <div className="mt-4 space-y-2">
              <p>
                Privacy questions or requests should be sent to{" "}
                <a className="text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
              <p>Phone: {siteConfig.phone}</p>
              <p>Location: {siteConfig.location}</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
