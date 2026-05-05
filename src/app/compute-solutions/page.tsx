import type { Metadata } from "next";
import { EcosystemLanePage } from "@/components/ecosystem-lane-page";
import { getEcosystemLane, siteConfig } from "@/lib/site-config";

const lane = getEcosystemLane("compute-solutions");

export const metadata: Metadata = {
  title: lane?.shortName,
  description: lane?.summary,
  alternates: {
    canonical: `${siteConfig.url}/compute-solutions`,
  },
};

export default function ComputeSolutionsPage() {
  return <EcosystemLanePage lane={lane!} />;
}
