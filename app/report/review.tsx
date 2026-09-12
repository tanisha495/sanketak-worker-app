import { AppButton } from "@/components";
import { useLanguage } from "@/i18n/use-language";
import { PlaceholderScreen } from "@/screens";

export default function ReviewReportRoute() {
  const { t } = useLanguage();

  return (
    <PlaceholderScreen
      body={t("report.reviewBody")}
      primaryAction={<AppButton href="/report/photo" title={t("report.continueToPhoto")} />}
      subtitle={t("report.reviewSubtitle")}
      title={t("report.reviewTitle")}
    />
  );
}
