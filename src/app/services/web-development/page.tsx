import { redirect } from "next/navigation";
import { featureFlags } from "@/lib/featureFlags";
import WebDevelopmentContent from "./_WebDevelopmentContent";

export default function WebDevelopmentPage() {
  if (!featureFlags.webDevelopment) {
    redirect("/coming-soon");
  }

  return <WebDevelopmentContent />;
}
