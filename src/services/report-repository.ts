import AsyncStorage from "@react-native-async-storage/async-storage";

import { mockReports } from "@/data";
import type { WorkerSafetyReport } from "@/types";

export const submittedReportsStorageKey = "sanketak_submitted_reports";

export async function getReports(): Promise<WorkerSafetyReport[]> {
  const storedReports = await getStoredReports();

  return [...storedReports, ...mockReports].sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  );
}

export async function saveReport(
  report: WorkerSafetyReport,
): Promise<WorkerSafetyReport> {
  const storedReports = await getStoredReports();
  const nextReports = [
    report,
    ...storedReports.filter((item) => item.id !== report.id),
  ];

  await AsyncStorage.setItem(
    submittedReportsStorageKey,
    JSON.stringify(nextReports),
  );

  return report;
}

export async function getReportById(
  id: string,
): Promise<WorkerSafetyReport | undefined> {
  const storedReports = await getStoredReports();

  return (
    storedReports.find((report) => report.id === id) ??
    mockReports.find((report) => report.id === id)
  );
}

export async function getReportByTrackingToken(
  token: string,
): Promise<WorkerSafetyReport | undefined> {
  const reports = await getReports();

  return reports.find((report) => report.trackingId === token);
}

async function getStoredReports(): Promise<WorkerSafetyReport[]> {
  const value = await AsyncStorage.getItem(submittedReportsStorageKey);

  if (!value) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(isWorkerSafetyReport);
  } catch {
    return [];
  }
}

function isWorkerSafetyReport(value: unknown): value is WorkerSafetyReport {
  if (!value || typeof value !== "object") {
    return false;
  }

  const report = value as Partial<WorkerSafetyReport>;

  return (
    typeof report.id === "string" &&
    typeof report.trackingId === "string" &&
    typeof report.description === "string" &&
    typeof report.submittedAt === "string" &&
    report.status === "submitted"
  );
}
