import { AppButton } from "@/components";
import { useLanguage } from "@/i18n/use-language";
import { PlaceholderScreen } from "@/screens";

export default function VoiceReportRoute() {
  const { t } = useLanguage();

  return (
    <PlaceholderScreen
      body={t("report.voiceBody")}
      primaryAction={<AppButton href="/report/review" title={t("report.continueToReview")} />}
      subtitle={t("report.voiceSubtitle")}
      title={t("report.voiceTitle")}
    />
  );
}
