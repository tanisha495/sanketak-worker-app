import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/constants";
import type { ReportStatus } from "@/types";
import { reportStatusLabels } from "@/utils";

interface StatusBadgeProps {
  status: ReportStatus;
}

const statusStyles: Record<
  ReportStatus,
  { backgroundColor: string; color: string }
> = {
  submitted: { backgroundColor: colors.infoSoft, color: colors.info },
  under_review: { backgroundColor: colors.warningSoft, color: colors.warning },
  action_in_progress: {
    backgroundColor: colors.primarySoft,
    color: colors.primary,
  },
  verified: { backgroundColor: colors.successSoft, color: colors.success },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <View style={[styles.badge, { backgroundColor: style.backgroundColor }]}>
      <Text style={[styles.label, { color: style.color }]}>
        {reportStatusLabels[status]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  label: {
    fontSize: typography.small,
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
