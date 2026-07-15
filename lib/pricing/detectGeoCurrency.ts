import {
  currencyFromCountry,
  CurrencyCode,
  DEFAULT_CURRENCY,
  parseCurrencyParam,
} from "@/lib/pricing/currency";

async function fromCloudflareTrace(): Promise<string | null> {
  const res = await fetch(`https://www.cloudflare.com/cdn-cgi/trace?t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const text = await res.text();
  const match = text.match(/(?:^|\n)loc=([A-Z]{2})(?:\n|$)/i);
  return match?.[1]?.toUpperCase() ?? null;
}

async function fromCountryIs(): Promise<string | null> {
  const res = await fetch(`https://api.country.is/?t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { country?: string };
  return data.country?.toUpperCase() ?? null;
}

async function fromIpWho(): Promise<string | null> {
  const res = await fetch(`https://ipwho.is/?t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { success?: boolean; country_code?: string };
  if (data.success === false) return null;
  return data.country_code?.toUpperCase() ?? null;
}

async function fromIpApi(): Promise<string | null> {
  const res = await fetch(`https://ipapi.co/country_code/?t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const text = (await res.text()).trim().toUpperCase();
  return /^[A-Z]{2}$/.test(text) ? text : null;
}

/**
 * Resolve visitor currency from the browser network path (respects VPN).
 * Tries multiple providers; never uses the Next.js server's egress IP.
 */
export async function detectCurrencyFromBrowser(): Promise<CurrencyCode | null> {
  const providers = [fromCloudflareTrace, fromCountryIs, fromIpWho, fromIpApi];

  for (const provider of providers) {
    try {
      const country = await provider();
      if (country) return currencyFromCountry(country);
    } catch {
      // try next provider
    }
  }

  return null;
}

export async function resolveGeoCurrency(): Promise<CurrencyCode> {
  // Deployed on Vercel/Cloudflare: use edge geo headers via our API
  try {
    const res = await fetch(`/api/geo-currency?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = (await res.json()) as { currency?: string; source?: string };
      if (data.source === "vercel" || data.source === "cloudflare") {
        return parseCurrencyParam(data.currency) ?? DEFAULT_CURRENCY;
      }
    }
  } catch {
    // fall through to browser IP lookup
  }

  // Local / no CDN headers: browser path (VPN-aware). Never use server IP.
  return (await detectCurrencyFromBrowser()) ?? DEFAULT_CURRENCY;
}
