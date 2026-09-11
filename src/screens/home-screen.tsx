import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { AppButton, AppHeader, ScreenContainer } from "@/components";
import { colors, radius, spacing, typography } from "@/constants";

export function HomeScreen() {
  return (
    <ScreenContainer>
      <AppHeader
        title="Sanketak"
        subtitle="Worker safety reporting for unsafe acts, unsafe conditions, and near misses."
      />

      <View style={styles.heroCard}>
        <MaterialIcons color={colors.primary} name="mic" size={42} />
        <Text style={styles.heroTitle}>Report a safety concern</Text>
        <Text style={styles.heroText}>
          Start with voice, type a report, or add a photo. Your identity is not
          required for anonymous reporting.
        </Text>
        <View style={styles.buttonStack}>
          <AppButton
            href="/report/voice"
            icon={<MaterialIcons color={colors.white} name="mic" size={22} />}
            title="Report by Voice"
          />
          <AppButton
            href="/report/text"
            icon={
              <MaterialIcons color={colors.primary} name="edit-note" size={22} />
            }
            title="Type a Report"
            variant="secondary"
          />
          <AppButton
            href="/report/photo"
            icon={
              <MaterialIcons color={colors.primary} name="photo-camera" size={22} />
            }
            title="Add Photo"
            variant="outline"
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  buttonStack: {
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  heroCard: {
    backgroundColor: colors.surfaceGreen,
    borderColor: colors.primarySoft,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
  },
  heroText: {
    color: colors.textMuted,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: spacing.sm,
  },
  heroTitle: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: "800",
    marginTop: spacing.lg,
  },
});
