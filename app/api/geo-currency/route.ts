import { NextResponse } from "next/server";
import { currencyFromCountry } from "@/lib/pricing/currency";

/**
 * Returns currency from CDN geo headers only (Vercel / Cloudflare).
 * IP lookups belong in the browser so VPN / visitor egress is used.
 */
export async function GET(request: Request) {
  const headerCountry =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    null;

  const country =
    headerCountry && headerCountry !== "XX" && headerCountry !== "T1"
      ? headerCountry.toUpperCase()
      : null;

  if (!country) {
    return NextResponse.json(
      {
        country: null,
        currency: null,
        source: "none",
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }

  return NextResponse.json(
    {
      country,
      currency: currencyFromCountry(country),
      source: request.headers.get("x-vercel-ip-country") ? "vercel" : "cloudflare",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
