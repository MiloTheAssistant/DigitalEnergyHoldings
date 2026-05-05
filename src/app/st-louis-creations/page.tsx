import type { Metadata } from "next";
import { EcosystemLanePage } from "@/components/ecosystem-lane-page";
import { getEcosystemLane, siteConfig } from "@/lib/site-config";

const lane = getEcosystemLane("st-louis-creations");

export const metadata: Metadata = {
  title: lane?.shortName,
  description: lane?.summary,
  alternates: {
    canonical: `${siteConfig.url}/st-louis-creations`,
  },
};

export default function StLouisCreationsPage() {
  return <EcosystemLanePage lane={lane!} />;
}
