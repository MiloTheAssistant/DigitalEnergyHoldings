import { ecosystemLanes, siteConfig } from "@/lib/site-config";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

function safeJson(data: JsonLdValue) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: safeJson(data) }}
      type="application/ld+json"
    />
  );
}

export function SiteStructuredData() {
  const logo = `${siteConfig.url}/brand/website-profile/deh-main-profile-stamp.png`;
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": organizationId,
          name: siteConfig.name,
          legalName: siteConfig.legalName,
          alternateName: siteConfig.shortName,
          url: siteConfig.url,
          logo,
          image: logo,
          description: siteConfig.description,
          email: siteConfig.email,
          telephone: siteConfig.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "St. Louis",
            addressRegion: "MO",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            contactType: "Business inquiries",
            areaServed: "US",
            availableLanguage: "en",
          },
          knowsAbout: [
            "intellectual property",
            "digital rights",
            "brand systems",
            "AI workflows",
            "automation",
            "digital asset governance",
            "Bitcoin infrastructure",
            "shared services",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Energy Holdings ecosystem lanes",
            itemListElement: ecosystemLanes.map((lane) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: lane.name,
                description: lane.description,
                url: `${siteConfig.url}${lane.href}`,
              },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": websiteId,
          url: siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          publisher: {
            "@id": organizationId,
          },
          inLanguage: "en-US",
        }}
      />
    </>
  );
}

export function ServiceStructuredData({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: "US",
      }}
    />
  );
}

export function FAQStructuredData({
  questions,
}: {
  questions: readonly { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
