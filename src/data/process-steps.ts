import processContent from "../content/site/process.json";
import type { ProcessStepContent } from "../types/content";

export type ProcessStep = ProcessStepContent;

export const processSteps: ProcessStep[] = processContent.steps as ProcessStep[];
