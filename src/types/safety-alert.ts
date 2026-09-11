export type SafetyAlertLevel = "info" | "warning" | "danger";

export interface SafetyAlert {
  id: string;
  title: string;
  message: string;
  level: SafetyAlertLevel;
  site?: string;
  issuedAt: string;
}
