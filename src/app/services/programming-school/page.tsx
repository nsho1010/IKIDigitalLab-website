import { redirect } from "next/navigation";
import { featureFlags } from "@/lib/featureFlags";
import ProgrammingSchoolContent from "./_ProgrammingSchoolContent";

export default function ProgrammingSchoolPage() {
  if (!featureFlags.programmingSchool) {
    redirect("/coming-soon");
  }

  return <ProgrammingSchoolContent />;
}
