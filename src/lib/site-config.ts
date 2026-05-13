export const siteConfig = {
  name: "Digital Energy Holdings",
  legalName: "Digital Energy Holdings, LLC",
  shortName: "DEH",
  tagline: "Where compute becomes capital.",
  url: "https://www.digitalenergyholdings.com",
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
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const frequentlyAskedQuestions = [
  {
    question: "What is Digital Energy Holdings?",
    answer:
      "Digital Energy Holdings, LLC is the asset and systems layer for a modern operating ecosystem. It centralizes intellectual property, digital rights, brand systems, domains, AI workflows, contracts, shared services, and governed digital asset infrastructure.",
  },
  {
    question: "What does Digital Energy Holdings own or manage?",
    answer:
      "DEH organizes company-owned brands, websites, domains, digital rights, AI workflow assets, automation systems, contracts, shared operating services, and governed digital asset infrastructure. Specific private legal, banking, custody, wallet, equipment, and treasury records are not published on the public website.",
  },
  {
    question: "What are the public ecosystem lanes?",
    answer:
      "The public lanes are Digital Energy Compute Solutions, Digital Energy AI Concepts, Digital Energy Media, and St. Louis Creations. Each lane serves a different operating function while staying connected to the DEH asset and systems layer.",
  },
  {
    question: "Is Digital Energy Holdings an investment company, exchange, custodian, or bank?",
    answer:
      "No. The website is informational and does not present DEH as an investment offering, fund, broker, exchange, custodian, bank, investment adviser, or financial product platform.",
  },
  {
    question: "How should banks, CPAs, vendors, or partners contact DEH?",
    answer:
      `Use the official company contact channel: ${siteConfig.email} or ${siteConfig.phone}. Inquiries should identify whether they relate to banking, accounting, vendor work, brand or licensing, operating-company activity, AI and automation, media, compute, or digital assets.`,
  },
  {
    question: "How does DEH describe digital assets publicly?",
    answer:
      "DEH describes Bitcoin, mining, node participation, and company-owned digital assets as governed digital energy and infrastructure context. Public content avoids private custody details, wallet details, equipment locations, account names, and investment recommendations.",
  },
] as const;

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
    answerBlocks: [
      {
        title: "What this lane does",
        body: "Digital Energy Compute Solutions gives DEH a practical lane for Bitcoin-aware compute infrastructure, hosted and local mining literacy, full-node participation, and energy-aware systems thinking.",
      },
      {
        title: "How it should be understood",
        body: "This lane is not presented as an investment product or public mining offer. It explains operational capability, governance, and infrastructure fluency inside the broader holding-company structure.",
      },
      {
        title: "What stays private",
        body: "Wallet details, custody arrangements, equipment locations, account names, counterparties, hash rates, and treasury records stay off the public website.",
      },
    ],
    faqs: [
      {
        question: "Does Digital Energy Compute Solutions offer investment advice?",
        answer:
          "No. Digital Energy Compute Solutions is described as company infrastructure and operational capability, not investment, brokerage, custody, exchange, or advisory activity.",
      },
      {
        question: "Why does DEH operate a compute lane?",
        answer:
          "The compute lane helps DEH understand Bitcoin infrastructure, mining operations, full-node participation, and digital energy systems through practical operational exposure.",
      },
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
    answerBlocks: [
      {
        title: "What this lane does",
        body: "Digital Energy AI Concepts designs practical AI workflows, automation rails, agent-assisted operations, and internal knowledge systems for businesses that need reliable execution.",
      },
      {
        title: "How it should be used",
        body: "The lane focuses on specific operating problems: mapping workflows, reducing repetitive work, improving review loops, and turning internal knowledge into repeatable processes.",
      },
      {
        title: "What makes it governed",
        body: "Human review stays attached to consequential decisions, and each workflow is documented before it is scaled or reused across the ecosystem.",
      },
    ],
    faqs: [
      {
        question: "What kind of AI work does Digital Energy AI Concepts handle?",
        answer:
          "It handles workflow design, automation mapping, agent-assisted operations, internal knowledge systems, and practical AI implementation tied to real business processes.",
      },
      {
        question: "Does the AI lane replace human decision-making?",
        answer:
          "No. The AI lane is designed to reduce friction and improve consistency while keeping human review on consequential decisions.",
      },
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
    answerBlocks: [
      {
        title: "What this lane does",
        body: "Digital Energy Media turns websites, sales assets, social media, campaigns, and content systems into a managed growth layer for DEH and related operating properties.",
      },
      {
        title: "How it supports operations",
        body: "Media work is treated as infrastructure: brand assets are organized, messages stay tied to business workflows, and campaign output is built for reuse instead of one-off production.",
      },
      {
        title: "Why it matters for visibility",
        body: "A structured media lane makes public company signals easier for customers, partners, search engines, and AI answer systems to understand and cite.",
      },
    ],
    faqs: [
      {
        question: "What does Digital Energy Media produce?",
        answer:
          "Digital Energy Media produces websites, landing pages, campaign systems, sales enablement assets, social content, and digital presence infrastructure.",
      },
      {
        question: "Is Digital Energy Media only an agency lane?",
        answer:
          "No. It can support agency-style work, but inside DEH it also operates as a reusable media and growth system for the broader company ecosystem.",
      },
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
    answerBlocks: [
      {
        title: "What this lane does",
        body: "St. Louis Creations connects design, fabrication, 3D printing, laser engraving, and custom production to DEH's digital asset and brand systems.",
      },
      {
        title: "How it fits DEH",
        body: "The lane turns digital design assets into controlled physical outputs while benefiting from shared systems for brand, media, process, and customer communication.",
      },
      {
        title: "Who it serves",
        body: "The lane supports local creative production, prototypes, personalized goods, custom fabrication, and design-to-object workflows.",
      },
    ],
    faqs: [
      {
        question: "What services does St. Louis Creations provide?",
        answer:
          "St. Louis Creations provides custom fabrication, 3D printed products and prototypes, laser engraving, customization, and local creative production services.",
      },
      {
        question: "Why is St. Louis Creations part of DEH?",
        answer:
          "It connects physical production to the same digital asset layer that governs brand assets, design files, media systems, and operating workflows.",
      },
    ],
  },
] as const;

export const ecosystemRoutes = ecosystemLanes.map((lane) => lane.href);

export const publicPages = [
  {
    path: "",
    title: "Digital Energy Holdings",
    description: siteConfig.description,
    priority: 1,
  },
  {
    path: "/digital-assets",
    title: "Digital Assets",
    description:
      "Bitcoin, crypto mining, local full-node participation, and company-owned digital assets framed through disciplined governance.",
    priority: 0.9,
  },
  ...ecosystemLanes.map((lane) => ({
    path: lane.href,
    title: lane.name,
    description: lane.summary,
    priority: 0.85,
  })),
  {
    path: "/faq",
    title: "FAQ",
    description:
      "Direct answers for banks, CPAs, vendors, partners, and AI/search systems about Digital Energy Holdings.",
    priority: 0.8,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Privacy policy for Digital Energy Holdings website visitors and inquiry form users.",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Terms of use for the Digital Energy Holdings informational website.",
    priority: 0.3,
  },
  {
    path: "/legal",
    title: "Legal Notice",
    description: "Legal and brand-use notice for Digital Energy Holdings.",
    priority: 0.3,
  },
  {
    path: "/thank-you",
    title: "Thank You",
    description: "Confirmation page for Digital Energy Holdings inquiries.",
    priority: 0.1,
  },
] as const;

export const aiCrawlerUserAgents = [
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Googlebot",
  "Google-Extended",
  "GoogleOther",
  "Bingbot",
] as const;

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
