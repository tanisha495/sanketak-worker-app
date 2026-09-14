import type { WorkerSafetyReport } from "@/types";
import {
  getSupabaseFunctionUrl,
  getSupabasePublishableKey,
} from "./supabase-client";

export interface RemoteReportResult {
  remoteReportId?: string;
  remoteAudioPath?: string;
  remotePhotoPath?: string;
}

export class RemoteReportError extends Error {
  constructor(message = "Unable to sync report to Supabase.") {
    super(message);
    this.name = "RemoteReportError";
  }
}

interface SubmitReportFunctionResponse {
  remoteReportId?: unknown;
  error?: unknown;
}

export async function submitReportToSupabase(
  report: WorkerSafetyReport,
): Promise<RemoteReportResult> {
  const publishableKey = getSupabasePublishableKey();

  if (!publishableKey) {
    throw new RemoteReportError("Supabase publishable key is not configured.");
  }

  const response = await fetch(getSupabaseFunctionUrl("submit-report"), {
    body: JSON.stringify({
      analysis: report.aiAnalysis
        ? {
            activity: report.aiAnalysis.activity,
            barrier_failure: report.aiAnalysis.barrierFailure,
            exposure: report.aiAnalysis.exposure,
            hazard: report.aiAnalysis.hazard,
            life_saving_rules: report.aiAnalysis.lifeSavingRules,
            potential_consequence: report.aiAnalysis.potentialConsequence,
          }
        : undefined,
      report: {
        area_or_equipment: report.areaOrEquipment,
        client_report_id: report.id,
        detected_language: report.detectedLanguage ?? null,
        final_text: report.description,
        original_text:
          report.reportingMethod === "text" ? report.description : null,
        report_language: report.language,
        report_type: report.reportingMethod,
        site: report.site,
        status: report.status,
        submitted_at: report.submittedAt,
        sync_status: "synced",
        tracking_id: report.trackingId,
        transcribed_text:
          report.reportingMethod === "voice" ? report.description : null,
      },
    }),
    headers: {
      Accept: "application/json",
      apikey: publishableKey,
      Authorization: `Bearer ${publishableKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const payload = await parseSubmitReportResponse(response);

  if (!response.ok) {
    throw new RemoteReportError(getSubmitReportError(payload, response.status));
  }

  return {
    remoteReportId:
      typeof payload.remoteReportId === "string"
        ? payload.remoteReportId
        : undefined,
  };
}

async function parseSubmitReportResponse(
  response: Response,
): Promise<SubmitReportFunctionResponse> {
  try {
    return (await response.json()) as SubmitReportFunctionResponse;
  } catch {
    return {};
  }
}

function getSubmitReportError(
  payload: SubmitReportFunctionResponse,
  status: number,
): string {
  if (typeof payload.error === "string" && payload.error.trim()) {
    return payload.error;
  }

  return `Supabase report sync failed with ${status}.`;
}
