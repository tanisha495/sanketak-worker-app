import { mockSafetyAlerts } from "@/data";
import type { ReportDraft } from "@/report-draft";
import type {
  ReportLanguage,
  ReportStatus,
  ReportStatusStep,
  SafetyAlert,
  WorkerSafetyReport,
} from "@/types";
import { getReportStatusSteps } from "@/utils";
import { createReportId, createTrackingId } from "./report-id-service";
import {
  getReportById as getPersistedReportById,
  getReports as getPersistedReports,
  saveReport,
} from "./report-repository";

export {
  getReportByTrackingToken,
  submittedReportsStorageKey,
} from "./report-repository";

const MOCK_DELAY_MS = 150;

function wait(ms = MOCK_DELAY_MS): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function submitReport(
  draft: ReportDraft,
): Promise<WorkerSafetyReport> {
  const description = draft.description.trim();

  if (!description) {
    throw new Error("Report description is required.");
  }

  const report: WorkerSafetyReport = {
    id: createReportId(),
    trackingId: createTrackingId(),
    description,
    language: mapReportLanguage(draft.reportLanguage),
    site: draft.site ?? "Not provided",
    areaOrEquipment: draft.area?.trim() || "Not provided",
    submittedAt: new Date().toISOString(),
    status: "submitted",
    reportingMethod: draft.reportingMethod,
    photoUri: draft.photoUri,
    audioUri: draft.audioUri,
    aiAnalysis: draft.analysis,
  };

  return saveReport(report);
}

export async function getReports(): Promise<WorkerSafetyReport[]> {
  await wait();
  return getPersistedReports();
}

export async function getReportById(
  id: string,
): Promise<WorkerSafetyReport | undefined> {
  await wait();
  return getPersistedReportById(id);
}

export async function getSafetyAlerts(): Promise<SafetyAlert[]> {
  await wait();
  return mockSafetyAlerts;
}

function mapReportLanguage(
  language: ReportDraft["reportLanguage"],
): ReportLanguage {
  if (language === "hi") {
    return "hindi";
  }

  if (language === "as") {
    return "assamese";
  }

  return "english";
}

export async function getReportStatus(
  id: string,
): Promise<{ status: ReportStatus; steps: ReportStatusStep[] } | undefined> {
  const report = await getReportById(id);

  if (!report) {
    return undefined;
  }

  return {
    status: report.status,
    steps: getReportStatusSteps(report.status),
  };
}
