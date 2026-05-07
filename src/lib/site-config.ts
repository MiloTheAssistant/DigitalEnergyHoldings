export const siteConfig = {
  name: "Digital Energy Holdings",
  legalName: "Digital Energy Holdings, LLC",
  shortName: "DEH",
  tagline: "Where compute becomes capital.",
  url: "https://digitalenergyholdings.com",
  email: "contact@DigitalEnergyHoldings.com",
  phone: "(573) 500-0064",
  location: "St. Louis, MO",
  description:
    "Digital Energy Holdings centralizes intellectual property, digital rights, brand systems, domains, AI workflows, contracts, shared services, and governed digital asset infrastructure for a modern operating ecosystem.",
  nav: [
    { label: "Architecture", href: "/#architecture" },
    { label: "Assets", href: "/#asset-layer" },
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Digital Assets", href: "/digital-assets" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const inquiryTypeOptions = [
  "Banking or credit inquiry",
  "CPA or professional services inquiry",
  "Vendor or contract inquiry",
  "Brand or licensing inquiry",
  "Operating-company inquiry",
  "AI and automation inquiry",
  "Digital asset inquiry",
  "General company inquiry",
] as const;

export const ecosystemLanes = [
  {
    name: "Digital Energy Compute Solutions™",
    shortName: "Compute Solutions",
    slug: "compute-solutions",
    href: "/compute-solutions",
    role: "Crypto mining, Bitcoin, and digital energy solutions",
    description:
      "The compute and digital asset infrastructure lane for mining, node participation, Bitcoin strategy, and disciplined digital energy systems.",
    headline: "Compute infrastructure for a Bitcoin-aware operating company.",
    summary:
      "Digital Energy Compute Solutions frames mining, nodes, infrastructure literacy, and energy-aware compute as practical company capability. The emphasis is governance, measured experimentation, and operational fluency.",
    focusAreas: [
      "Bitcoin and digital energy strategy",
      "Hosted and local mining operations",
      "Local full-node participation",
      "Treasury-aware infrastructure controls",
    ],
    operatingSignals: [
      "Private operational details stay private",
      "Compute activity is documented as company infrastructure",
      "Treasury posture is governed, not promoted",
    ],
  },
  {
    name: "Digital Energy AI Concepts™",
    shortName: "AI Concepts",
    slug: "ai-concepts",
    href: "/ai-concepts",
    role: "AI consulting, automation, agents, and workflows",
    description:
      "The AI systems lane for practical automation, agent-assisted operations, workflow design, and applied intelligence.",
    headline: "AI systems that convert workflows into operating leverage.",
    summary:
      "Digital Energy AI Concepts designs practical AI workflows, automation rails, agent-assisted processes, and decision-support systems for real businesses that need execution, not hype.",
    focusAreas: [
      "AI workflow design",
      "Agent-assisted operations",
      "Automation mapping and implementation",
      "Internal knowledge and process systems",
    ],
    operatingSignals: [
      "Use AI where it reduces friction or increases quality",
      "Keep human review on consequential decisions",
      "Document repeatable workflows before scaling them",
    ],
  },
  {
    name: "Digital Energy Media™",
    shortName: "Media",
    slug: "media",
    href: "/media",
    role: "Marketing, sales, social media, and agency work",
    description:
      "The visibility and growth lane for websites, media systems, campaign assets, sales enablement, and digital presence.",
    headline: "Media systems that make digital presence operational.",
    summary:
      "Digital Energy Media turns websites, content, sales assets, social media, and campaign systems into a managed growth layer that can be reused across the broader ecosystem.",
    focusAreas: [
      "Websites and landing pages",
      "Social and campaign systems",
      "Sales enablement assets",
      "Brand and content operations",
    ],
    operatingSignals: [
      "Brand assets stay structured and reusable",
      "Campaign work connects to business workflows",
      "Creative output is paired with distribution discipline",
    ],
  },
  {
    name: "St. Louis Creations™",
    shortName: "St. Louis Creations",
    slug: "st-louis-creations",
    href: "/st-louis-creations",
    role: "3D printing, laser engraving, and custom services",
    description:
      "The physical production lane for custom fabrication, design-to-object services, creative products, and local manufacturing.",
    headline: "Physical production for custom products, prototypes, and local creative work.",
    summary:
      "St. Louis Creations connects design, fabrication, engraving, and custom production services to the same digital asset layer that governs brands, media, and operating systems.",
    focusAreas: [
      "3D printed products and prototypes",
      "Laser engraving and customization",
      "Design-to-object workflows",
      "Local creative production services",
    ],
    operatingSignals: [
      "Digital designs become controlled physical outputs",
      "Custom production is supported by repeatable systems",
      "Local service work benefits from centralized brand assets",
    ],
  },
] as const;

export const ecosystemRoutes = ecosystemLanes.map((lane) => lane.href);

export function getEcosystemLane(slug: string) {
  return ecosystemLanes.find((lane) => lane.slug === slug);
}

export const homepageSignals = [
  "IP ownership",
  "Digital rights",
  "AI workflows",
  "Automation rails",
  "Brand systems",
  "Governed assets",
] as const;
