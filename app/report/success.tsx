import { AppButton } from "@/components";
import { useLanguage } from "@/i18n/use-language";
import { PlaceholderScreen } from "@/screens";

export default function SubmissionSuccessRoute() {
  const { t } = useLanguage();

  return (
    <PlaceholderScreen
      body={t("report.successBody")}
      primaryAction={<AppButton href="/reports" title={t("report.viewMyReports")} />}
      subtitle={t("report.successSubtitle")}
      title={t("report.successTitle")}
    />
  );
}
