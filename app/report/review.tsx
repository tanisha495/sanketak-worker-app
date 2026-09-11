import { AppButton } from "@/components";
import { PlaceholderScreen } from "@/screens";

export default function ReviewReportRoute() {
  return (
    <PlaceholderScreen
      body="This screen will show the worker what Sanketak understood before submission. AI analysis will come from the backend service."
      primaryAction={<AppButton href="/report/photo" title="Continue to Photo" />}
      subtitle="Worker confirmation placeholder"
      title="Review Report"
    />
  );
}
