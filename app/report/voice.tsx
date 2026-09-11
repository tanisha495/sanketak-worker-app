import { AppButton } from "@/components";
import { PlaceholderScreen } from "@/screens";

export default function VoiceReportRoute() {
  return (
    <PlaceholderScreen
      body="The microphone interface will be implemented later. For now, this route confirms the voice report flow is reachable."
      primaryAction={<AppButton href="/report/review" title="Continue to Review" />}
      subtitle="Voice-first reporting placeholder"
      title="Voice Report"
    />
  );
}
