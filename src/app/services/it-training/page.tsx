import { redirect } from "next/navigation";
import { featureFlags } from "@/lib/featureFlags";
import ItTrainingContent from "./_ItTrainingContent";

export default function ItTrainingPage() {
  if (!featureFlags.itTraining) {
    redirect("/coming-soon");
  }

  return <ItTrainingContent />;
}
