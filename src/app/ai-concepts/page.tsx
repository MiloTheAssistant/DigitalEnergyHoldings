import type { Metadata } from "next";
import { EcosystemLanePage } from "@/components/ecosystem-lane-page";
import { getEcosystemLane, siteConfig } from "@/lib/site-config";

const lane = getEcosystemLane("ai-concepts");

export const metadata: Metadata = {
  title: lane?.shortName,
  description: lane?.summary,
  alternates: {
    canonical: `${siteConfig.url}/ai-concepts`,
  },
};

export default function AiConceptsPage() {
  return <EcosystemLanePage lane={lane!} />;
}
