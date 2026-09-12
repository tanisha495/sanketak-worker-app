import { StyleSheet, Text, View } from "react-native";

import { AppHeader, ScreenContainer } from "@/components";
import { colors, radius, spacing, typography } from "@/constants";
import { useLanguage } from "@/i18n/use-language";

export function HomeScreen() {
  const { t } = useLanguage();

  return (
    <ScreenContainer>
      <AppHeader title={t("home.title")} subtitle={t("home.subtitle")} />
      <View style={styles.card}>
        <Text style={styles.text}>{t("home.placeholder")}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceGreen,
    borderColor: colors.primarySoft,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
  },
  text: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
