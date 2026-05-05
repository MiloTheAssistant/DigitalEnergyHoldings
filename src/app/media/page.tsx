import type { Metadata } from "next";
import { EcosystemLanePage } from "@/components/ecosystem-lane-page";
import { getEcosystemLane, siteConfig } from "@/lib/site-config";

const lane = getEcosystemLane("media");

export const metadata: Metadata = {
  title: lane?.shortName,
  description: lane?.summary,
  alternates: {
    canonical: `${siteConfig.url}/media`,
  },
};

export default function MediaPage() {
  return <EcosystemLanePage lane={lane!} />;
}
