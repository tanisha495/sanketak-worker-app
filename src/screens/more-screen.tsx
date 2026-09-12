import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { AppButton, AppHeader, ScreenContainer } from "@/components";
import { colors, radius, spacing, typography } from "@/constants";
import { useLanguage } from "@/i18n/use-language";

export function MoreScreen() {
  const { t } = useLanguage();

  return (
    <ScreenContainer>
      <AppHeader
        title={t("more.title")}
        subtitle={t("more.subtitle")}
      />

      <View style={styles.card}>
        <Text style={styles.title}>{t("more.cardTitle")}</Text>
        <Text style={styles.text}>
          {t("more.cardBody")}
        </Text>
      </View>

      <AppButton
        href="/language"
        icon={<MaterialIcons color={colors.primary} name="language" size={22} />}
        title={t("more.languageSelection")}
        variant="secondary"
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.lg,
    padding: spacing.lg,
  },
  text: {
    color: colors.textMuted,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: typography.subheading,
    fontWeight: "800",
  },
});
