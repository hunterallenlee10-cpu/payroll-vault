// Optional lead routing. The site is front end only; by default a quote request ends in the on-screen summary
// and the prefilled text message to Mike. When corporate provides a form or CRM endpoint (Payroll Vault's
// franchisee CRM), set NEXT_PUBLIC_LEAD_ENDPOINT and every submitted request is also POSTed there as JSON.
// Nothing is sent anywhere unless that variable is set.

export const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "";

export function sendLead(payload: Record<string, unknown>) {
  if (!leadEndpoint) return;
  try {
    void fetch(leadEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: "Payroll Vault Frederick", submittedAt: new Date().toISOString(), ...payload }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never block the success screen on a network problem.
  }
}
