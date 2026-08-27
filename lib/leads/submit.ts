import type { LeadPath } from "./validate";

export type LeadSubmitSuccess = { ok: true; id: string };
export type LeadSubmitFailure = {
  ok: false;
  error: string;
  fields?: Record<string, string>;
  message: string;
};

export type LeadSubmitResult = LeadSubmitSuccess | LeadSubmitFailure;

export async function submitLead(
  path: LeadPath,
  body: Record<string, unknown>,
): Promise<LeadSubmitResult> {
  try {
    const res = await fetch(`/api/leads/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; id?: string; error?: string; fields?: Record<string, string> }
      | null;

    if (res.ok && data?.ok && data.id) {
      return { ok: true, id: data.id };
    }

    if (res.status === 400 && data?.error === "validation_error") {
      return {
        ok: false,
        error: "validation_error",
        fields: data.fields,
        message: "Please check the highlighted fields and try again.",
      };
    }

    return {
      ok: false,
      error: data?.error ?? "server_error",
      message: "Something went wrong. Please try again in a moment.",
    };
  } catch {
    return {
      ok: false,
      error: "network_error",
      message: "Could not reach the server. Check your connection and try again.",
    };
  }
}
