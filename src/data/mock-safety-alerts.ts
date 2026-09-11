import type { SafetyAlert } from "@/types";

export const mockSafetyAlerts: SafetyAlert[] = [
  {
    id: "alert-001",
    title: "Energy Isolation Reminder",
    message:
      "Verify isolation and try-out before beginning maintenance on pumps, compressors, or electrical equipment.",
    level: "warning",
    site: "All sites",
    issuedAt: "2026-09-11T04:00:00.000Z",
  },
  {
    id: "alert-002",
    title: "PPE Reminder",
    message:
      "Use required eye, hand, and respiratory protection in processing and maintenance zones.",
    level: "info",
    site: "Field operations",
    issuedAt: "2026-09-10T07:30:00.000Z",
  },
  {
    id: "alert-003",
    title: "Revised LOTO Procedure",
    message:
      "A revised lockout-tagout checklist is active for rotating equipment maintenance activities.",
    level: "info",
    site: "Duliajan Production Site",
    issuedAt: "2026-09-09T10:00:00.000Z",
  },
];
