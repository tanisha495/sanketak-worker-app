import type { ReportStatus, ReportStatusStep } from "@/types";

const orderedStatuses: ReportStatus[] = [
  "submitted",
  "under_review",
  "action_in_progress",
  "verified",
];

export const reportStatusLabels: Record<ReportStatus, string> = {
  submitted: "Submitted",
  under_review: "Under Review",
  action_in_progress: "Action in Progress",
  verified: "Verified",
};

export function getReportStatusSteps(status: ReportStatus): ReportStatusStep[] {
  const activeIndex = orderedStatuses.indexOf(status);

  return orderedStatuses.map((item, index) => ({
    id: item,
    label: reportStatusLabels[item],
    completed: index < activeIndex || status === "verified",
    active: index === activeIndex,
  }));
}

export function formatReportDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
