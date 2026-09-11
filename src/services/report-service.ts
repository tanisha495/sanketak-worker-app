import { mockReports, mockSafetyAlerts } from "@/data";
import type {
  ReportStatus,
  ReportStatusStep,
  SafetyAlert,
  SubmitReportInput,
  WorkerSafetyReport,
} from "@/types";
import { getReportStatusSteps } from "@/utils";

const MOCK_DELAY_MS = 150;

function wait(ms = MOCK_DELAY_MS): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function createTrackingId(): string {
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `SNK-${suffix}`;
}

export async function submitReport(
  input: SubmitReportInput,
): Promise<WorkerSafetyReport> {
  await wait();

  return {
    id: `report-${Date.now()}`,
    trackingId: createTrackingId(),
    description: input.description,
    language: input.language,
    site: input.site,
    areaOrEquipment: input.areaOrEquipment,
    submittedAt: new Date().toISOString(),
    status: "submitted",
    reportingMethod: input.reportingMethod,
    photoUri: input.photoUri,
  };
}

export async function getReports(): Promise<WorkerSafetyReport[]> {
  await wait();
  return mockReports;
}

export async function getReportById(
  id: string,
): Promise<WorkerSafetyReport | undefined> {
  await wait();
  return mockReports.find((report) => report.id === id);
}

export async function getSafetyAlerts(): Promise<SafetyAlert[]> {
  await wait();
  return mockSafetyAlerts;
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
