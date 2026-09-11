import { AppButton } from "@/components";
import { PlaceholderScreen } from "@/screens";

export default function TextReportRoute() {
  return (
    <PlaceholderScreen
      body="The text report form will be built in a later step. This placeholder keeps the report navigation path available."
      primaryAction={<AppButton href="/report/review" title="Continue to Review" />}
      subtitle="Manual reporting placeholder"
      title="Text Report"
    />
  );
}
