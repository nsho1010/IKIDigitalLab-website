import { redirect } from "next/navigation";
import { featureFlags } from "@/lib/featureFlags";
import DxAiSupportContent from "./_DxAiSupportContent";

export default function DxAiSupportPage() {
  if (!featureFlags.dxAiSupport) {
    redirect("/coming-soon");
  }

  return <DxAiSupportContent />;
}
