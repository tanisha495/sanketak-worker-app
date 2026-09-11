import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  AppHeader,
  EmptyState,
  ScreenContainer,
  StatusBadge,
} from "@/components";
import { colors, radius, spacing, typography } from "@/constants";
import { getReportById, getReportStatus } from "@/services";
import type { ReportStatusStep, WorkerSafetyReport } from "@/types";
import { formatReportDate } from "@/utils";

export function ReportDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [report, setReport] = useState<WorkerSafetyReport | undefined>();
  const [steps, setSteps] = useState<ReportStatusStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    Promise.all([getReportById(id), getReportStatus(id)])
      .then(([reportResult, statusResult]) => {
        if (mounted) {
          setReport(reportResult);
          setSteps(statusResult?.steps ?? []);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <ScreenContainer>
        <AppHeader showBack title="Report Details" />
        <Text style={styles.muted}>Loading report...</Text>
      </ScreenContainer>
    );
  }

  if (!report) {
    return (
      <ScreenContainer>
        <AppHeader showBack title="Report Details" />
        <EmptyState
          message="This report could not be found in the mock data."
          title="Report not found"
        />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <AppHeader
        showBack
        subtitle={report.trackingId}
        title="Report Details"
      />

      <View style={styles.card}>
        <StatusBadge status={report.status} />
        <Text style={styles.description}>{report.description}</Text>
        <Text style={styles.meta}>
          {report.site} • {report.areaOrEquipment}
        </Text>
        <Text style={styles.meta}>{formatReportDate(report.submittedAt)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Status Timeline</Text>
        <View style={styles.timeline}>
          {steps.map((step) => (
            <View key={step.id} style={styles.timelineRow}>
              <View
                style={[
                  styles.dot,
                  step.completed || step.active ? styles.dotActive : null,
                ]}
              />
              <Text
                style={[
                  styles.timelineLabel,
                  step.active ? styles.timelineActive : null,
                ]}
              >
                {step.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {report.aiAnalysis ? (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Sanketak Understood</Text>
          <Text style={styles.analysisText}>
            Activity: {report.aiAnalysis.activity}
          </Text>
          <Text style={styles.analysisText}>
            Barrier Concern: {report.aiAnalysis.barrierFailure}
          </Text>
          <Text style={styles.analysisText}>
            Life-Saving Rule: {report.aiAnalysis.lifeSavingRules.join(", ")}
          </Text>
        </View>
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  analysisText: {
    color: colors.textMuted,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: spacing.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.lg,
    padding: spacing.lg,
  },
  description: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 24,
    marginTop: spacing.md,
  },
  dot: {
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    height: 14,
    width: 14,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  meta: {
    color: colors.textMuted,
    fontSize: typography.caption,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
  muted: {
    color: colors.textMuted,
    fontSize: typography.body,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: typography.subheading,
    fontWeight: "800",
  },
  timeline: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  timelineActive: {
    color: colors.primary,
    fontWeight: "800",
  },
  timelineLabel: {
    color: colors.text,
    flex: 1,
    fontSize: typography.body,
  },
  timelineRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
  },
});
