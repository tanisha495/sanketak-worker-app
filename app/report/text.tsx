import { AppButton } from "@/components";
import { useLanguage } from "@/i18n/use-language";
import { PlaceholderScreen } from "@/screens";

export default function TextReportRoute() {
  const { t } = useLanguage();

  return (
    <PlaceholderScreen
      body={t("report.textBody")}
      primaryAction={<AppButton href="/report/review" title={t("report.continueToReview")} />}
      subtitle={t("report.textSubtitle")}
      title={t("report.textTitle")}
    />
  );
}
