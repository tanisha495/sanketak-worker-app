import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { AppButton, AppHeader, ScreenContainer } from "@/components";
import { colors, radius, spacing, typography } from "@/constants";

export function MoreScreen() {
  return (
    <ScreenContainer>
      <AppHeader
        title="More"
        subtitle="Language, help, privacy, and app information will live here."
      />

      <View style={styles.card}>
        <Text style={styles.title}>Worker app foundation</Text>
        <Text style={styles.text}>
          Settings, help, about Sanketak, privacy, and feedback screens will be
          added incrementally after the navigation foundation is approved.
        </Text>
      </View>

      <AppButton
        href="/language"
        icon={<MaterialIcons color={colors.primary} name="language" size={22} />}
        title="Language Selection"
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
