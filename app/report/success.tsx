import { AppButton } from "@/components";
import { PlaceholderScreen } from "@/screens";

export default function SubmissionSuccessRoute() {
  return (
    <PlaceholderScreen
      body="A submitted report confirmation will show the anonymous tracking ID here. The current screen verifies the success route."
      primaryAction={<AppButton href="/reports" title="View My Reports" />}
      subtitle="Anonymous submission placeholder"
      title="Report Submitted"
    />
  );
}
