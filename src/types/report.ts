export type ReportLanguage = "english" | "hindi" | "assamese" | "mixed";

export type ReportStatus =
  | "submitted"
  | "under_review"
  | "action_in_progress"
  | "verified";

export type ReportingMethod = "voice" | "text" | "photo";

export interface SifAnalysis {
  activity: string;
  hazard: string;
  exposure: string;
  barrierFailure: string;
  potentialConsequence: string;
  lifeSavingRules: string[];
}

export interface WorkerSafetyReport {
  id: string;
  trackingId: string;
  description: string;
  language: ReportLanguage;
  site: string;
  areaOrEquipment: string;
  submittedAt: string;
  status: ReportStatus;
  reportingMethod: ReportingMethod;
  photoUri?: string;
  audioUri?: string;
  aiAnalysis?: SifAnalysis;
}

export interface SubmitReportInput {
  description: string;
  language: ReportLanguage;
  site: string;
  areaOrEquipment: string;
  reportingMethod: ReportingMethod;
  photoUri?: string;
}

export interface ReportStatusStep {
  id: ReportStatus;
  label: string;
  completed: boolean;
  active: boolean;
}
