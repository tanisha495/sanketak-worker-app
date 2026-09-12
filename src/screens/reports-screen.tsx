import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  AppButton,
  AppHeader,
  EmptyState,
  ScreenContainer,
  StatusBadge,
} from "@/components";
import { colors, radius, spacing, typography } from "@/constants";
import { useLanguage } from "@/i18n/use-language";
import { getReports } from "@/services";
import type { WorkerSafetyReport } from "@/types";
import { formatReportDate } from "@/utils";

export function ReportsScreen() {
  const { t } = useLanguage();
  const [reports, setReports] = useState<WorkerSafetyReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getReports()
      .then((items) => {
        if (mounted) {
          setReports(items);
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
  }, []);

  return (
    <ScreenContainer>
      <AppHeader
        title={t("reports.title")}
        subtitle={t("reports.subtitle")}
      />

      {loading ? <Text style={styles.muted}>{t("common.loadingReports")}</Text> : null}

      {!loading && reports.length === 0 ? (
        <EmptyState
          action={<AppButton href="/report/voice" title={t("reports.startReport")} />}
          message={t("reports.emptyMessage")}
          title={t("reports.emptyTitle")}
        />
      ) : null}

      <View style={styles.list}>
        {reports.map((report) => (
          <Link
            asChild
            href={{
              pathname: "/report-details/[id]",
              params: { id: report.id },
            }}
            key={report.id}
          >
            <Pressable style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.trackingId}>{report.trackingId}</Text>
                <StatusBadge status={report.status} />
              </View>
              <Text numberOfLines={2} style={styles.description}>
                {report.description}
              </Text>
              <Text style={styles.meta}>
                {report.site} • {formatReportDate(report.submittedAt)}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    padding: spacing.lg,
  },
  cardHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "space-between",
  },
  description: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: spacing.md,
  },
  list: {
    gap: spacing.md,
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
  trackingId: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: "800",
  },
});
