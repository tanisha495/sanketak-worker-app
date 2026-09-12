import {
  createContext,
  type ReactNode,
  use,
  useCallback,
  useMemo,
  useState,
} from "react";

import type { AppLanguage } from "@/i18n";

export type ReportingMethod = "voice" | "text" | "photo";
export type ReportSite = "Duliajan" | "Moran" | "Digboi";

export interface ReportAnalysis {
  activity: string;
  hazard: string;
  exposure: string;
  barrierFailure: string;
  potentialConsequence: string;
  lifeSavingRules: string[];
}

export interface ReportDraft {
  description: string;
  reportingMethod: ReportingMethod;
  reportLanguage: AppLanguage;
  detectedLanguage?: AppLanguage | string;
  site?: ReportSite;
  area?: string;
  photoUri?: string;
  audioUri?: string;
  analysis?: ReportAnalysis;
}

interface ReportDraftContextValue {
  draft: ReportDraft;
  resetDraft: () => void;
  replaceDraft: (draft: ReportDraft) => void;
  updateDraft: (patch: Partial<ReportDraft>) => void;
}

const initialDraft: ReportDraft = {
  description: "",
  reportingMethod: "text",
  reportLanguage: "en",
};

const ReportDraftContext = createContext<ReportDraftContextValue | null>(null);

export function ReportDraftProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<ReportDraft>(initialDraft);

  const updateDraft = useCallback((patch: Partial<ReportDraft>) => {
    setDraft((current) => ({
      ...current,
      ...patch,
    }));
  }, []);

  const replaceDraft = useCallback((nextDraft: ReportDraft) => {
    setDraft(nextDraft);
  }, []);

  const resetDraft = useCallback(() => {
    setDraft(initialDraft);
  }, []);

  const value = useMemo(
    () => ({
      draft,
      replaceDraft,
      resetDraft,
      updateDraft,
    }),
    [draft, replaceDraft, resetDraft, updateDraft],
  );

  return (
    <ReportDraftContext.Provider value={value}>
      {children}
    </ReportDraftContext.Provider>
  );
}

export function useReportDraft() {
  const context = use(ReportDraftContext);

  if (!context) {
    throw new Error("useReportDraft must be used within ReportDraftProvider");
  }

  return context;
}
