export const siteConfig = {
  name: "Digital Energy Holdings",
  legalName: "Digital Energy Holdings, LLC",
  shortName: "DEH",
  tagline: "Where compute becomes capital.",
  url: "https://digitalenergyholdings.com",
  email: "Contact@DigitalEnergyHoldings.Com",
  phone: "(573) 500-0064",
  location: "Eureka, MO / St. Louis Region",
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
    role: "Crypto mining, Bitcoin, and digital energy solutions",
    description:
      "The compute and digital asset infrastructure lane for mining, node participation, Bitcoin strategy, and disciplined digital energy systems.",
  },
  {
    name: "Digital Energy AI Concepts™",
    role: "AI consulting, automation, agents, and workflows",
    description:
      "The AI systems lane for practical automation, agent-assisted operations, workflow design, and applied intelligence.",
  },
  {
    name: "Digital Energy Media™",
    role: "Marketing, sales, social media, and agency work",
    description:
      "The visibility and growth lane for websites, media systems, campaign assets, sales enablement, and digital presence.",
  },
  {
    name: "St. Louis Creations™",
    role: "3D printing, laser engraving, and custom services",
    description:
      "The physical production lane for custom fabrication, design-to-object services, creative products, and local manufacturing.",
  },
] as const;

export const homepageSignals = [
  "IP ownership",
  "Digital rights",
  "AI workflows",
  "Automation rails",
  "Brand systems",
  "Governed assets",
] as const;
