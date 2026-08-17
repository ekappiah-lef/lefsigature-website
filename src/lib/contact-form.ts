export interface InquiryPayload {
  fullName: string;
  company: string;
  email: string;
  service: string;
  message: string;
}

export interface InquiryResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends a contact inquiry.
 *
 * Submission is intentionally isolated here so a real backend can be connected
 * without touching the form UI. To go live, replace the simulated call below
 * with a POST to a Next.js Route Handler or a Server Action that forwards the
 * payload to your email provider. Keep provider API keys server-side only —
 * never reference them from this client-reachable module.
 */
export async function sendInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  // Simulated network round-trip so the UI exercises its loading/success states.
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!payload.email || !payload.fullName || !payload.message) {
    return { ok: false, error: "Missing required fields." };
  }

  return { ok: true };
}
