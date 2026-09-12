import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppHeader, EmptyState, ScreenContainer } from "@/components";
import { colors, radius, spacing, typography } from "@/constants";
import { useLanguage } from "@/i18n/use-language";
import { getSafetyAlerts } from "@/services";
import type { SafetyAlert } from "@/types";
import { formatReportDate } from "@/utils";

export function AlertsScreen() {
  const { t } = useLanguage();
  const [alerts, setAlerts] = useState<SafetyAlert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getSafetyAlerts()
      .then((items) => {
        if (mounted) {
          setAlerts(items);
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
        title={t("alerts.title")}
        subtitle={t("alerts.subtitle")}
      />

      {loading ? <Text style={styles.muted}>{t("common.loadingAlerts")}</Text> : null}

      {!loading && alerts.length === 0 ? (
        <EmptyState
          message={t("alerts.emptyMessage")}
          title={t("alerts.emptyTitle")}
        />
      ) : null}

      <View style={styles.list}>
        {alerts.map((alert) => (
          <View key={alert.id} style={styles.card}>
            <View style={[styles.levelBar, styles[alert.level]]} />
            <View style={styles.cardBody}>
              <Text style={styles.title}>{alert.title}</Text>
              <Text style={styles.message}>{alert.message}</Text>
              <Text style={styles.meta}>
                {alert.site ?? t("common.allSites")} • {formatReportDate(alert.issuedAt)}
              </Text>
            </View>
          </View>
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
    flexDirection: "row",
    overflow: "hidden",
  },
  cardBody: {
    flex: 1,
    padding: spacing.lg,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  info: {
    backgroundColor: colors.info,
  },
  levelBar: {
    width: 6,
  },
  list: {
    gap: spacing.md,
  },
  message: {
    color: colors.textMuted,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: spacing.sm,
  },
  meta: {
    color: colors.textMuted,
    fontSize: typography.caption,
    marginTop: spacing.md,
  },
  muted: {
    color: colors.textMuted,
    fontSize: typography.body,
  },
  title: {
    color: colors.text,
    fontSize: typography.subheading,
    fontWeight: "800",
  },
  warning: {
    backgroundColor: colors.warning,
  },
});
