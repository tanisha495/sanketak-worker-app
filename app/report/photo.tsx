import { AppButton } from "@/components";
import { useLanguage } from "@/i18n/use-language";
import { PlaceholderScreen } from "@/screens";

export default function AddPhotoRoute() {
  const { t } = useLanguage();

  return (
    <PlaceholderScreen
      body={t("report.photoBody")}
      primaryAction={<AppButton href="/report/success" title={t("report.submitMockReport")} />}
      subtitle={t("report.photoSubtitle")}
      title={t("report.photoTitle")}
    />
  );
}
