import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Digital Energy Holdings informational website.",
};

const sections = [
  {
    title: "Use of this website",
    body: [
      "This website is provided for general informational purposes about Digital Energy Holdings and its public ecosystem lanes. You may use the website only for lawful purposes and in accordance with these Terms.",
      "You agree not to interfere with the website, attempt unauthorized access, introduce malicious code, scrape or harvest data in an abusive manner, impersonate others, or use the website to submit unlawful, misleading, confidential, or harmful material.",
    ],
  },
  {
    title: "No professional, financial, or investment advice",
    body: [
      "Website content is not legal, tax, accounting, investment, banking, brokerage, custody, fiduciary, or financial advice.",
      "References to Bitcoin, digital assets, mining, nodes, treasury strategy, AI, automation, intellectual property, or operating systems are provided as company-context information only. They are not an offer to sell securities, solicit investment, provide custody, operate an exchange, or recommend any digital asset transaction.",
      "You should consult qualified professionals before making legal, tax, accounting, financial, investment, or technical decisions.",
    ],
  },
  {
    title: "Informational site only",
    body: [
      "This website does not currently provide e-commerce checkout, subscriptions, paid online services, investment products, account access, custody services, banking services, or transaction execution.",
      "Submitting a contact form does not create a client, advisory, agency, fiduciary, vendor, partner, employment, investment, or confidential relationship with Digital Energy Holdings.",
    ],
  },
  {
    title: "Contact form submissions",
    body: [
      "If you submit an inquiry, you are responsible for the accuracy and legality of the information you provide.",
      "Do not submit tax records, banking information, wallet details, private keys, seed phrases, passwords, custody information, trade secrets, or other sensitive confidential information through the public contact form.",
      "We may respond, decline to respond, route the inquiry internally, or retain the submission for legitimate operational purposes.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The website, including text, layout, graphics, brand names, trade names, logos, service names, design elements, and other content, is owned by or licensed to Digital Energy Holdings unless otherwise stated.",
      "You may view the website for personal or internal business evaluation. You may not copy, reproduce, modify, distribute, sell, exploit, or create derivative works from website content without written permission, except where permitted by law.",
    ],
  },
  {
    title: "Third-party links and services",
    body: [
      "The website may reference or link to third-party websites, platforms, analytics services, social networks, infrastructure providers, or ecosystem properties. We do not control third-party sites and are not responsible for their content, security, practices, or availability.",
      "Your use of third-party services is governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "Accuracy and availability",
    body: [
      "We may update, remove, or change website content at any time. We do not guarantee that content is complete, current, error-free, uninterrupted, secure, or available at all times.",
      "Forward-looking, strategic, technical, digital asset, AI, automation, or ecosystem statements are subject to change and should not be relied on as commitments or guarantees.",
    ],
  },
  {
    title: "Disclaimer of warranties",
    body: [
      "The website and its content are provided on an as-is and as-available basis. To the fullest extent permitted by law, Digital Energy Holdings disclaims all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, availability, accuracy, and security.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Digital Energy Holdings and its owners, officers, employees, contractors, service providers, and affiliates will not be liable for indirect, incidental, consequential, special, exemplary, punitive, or lost-profit damages arising from or related to your use of the website.",
      "Where liability cannot be excluded, liability will be limited to the maximum extent permitted by applicable law.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "You agree to defend, indemnify, and hold harmless Digital Energy Holdings from claims, damages, liabilities, losses, costs, and expenses arising from your misuse of the website, violation of these Terms, violation of law, or infringement of any rights of another person or entity.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These Terms are governed by the laws of Missouri, United States, without regard to conflict-of-law principles.",
    ],
  },
  {
    title: "Changes to these Terms",
    body: [
      "We may update these Terms from time to time. The updated version will be posted on this page with a revised effective date. Continued use of the website after changes are posted means you accept the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050608] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link className="text-sm text-[#f3d687]" href="/">Back to home</Link>
        <p className="mt-8 text-sm font-semibold text-[#f3d687]">
          Effective May 7, 2026
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Terms of Use</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            These Terms of Use govern your access to and use of {siteConfig.url}
            and any pages operated by {siteConfig.legalName} for this website.
            By using this website, you agree to these Terms.
          </p>
          <p>
            If you do not agree to these Terms, do not use this website.
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
                Questions about these Terms should be sent to{" "}
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
