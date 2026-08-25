import type { Metadata } from "next";

/**
 * Public site origin for this deployment.
 * Set NEXT_PUBLIC_SITE_URL only when you need a fixed domain (e.g. https://buyience.com).
 * Otherwise uses Vercel's VERCEL_URL, or localhost in local dev.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }

  return "http://localhost:3000";
}

const DEFAULT_OG_IMAGE = "/og.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Build page Metadata with absolute title, canonical, and OG/Twitter mirrors. */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const images = [{ url: image }];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
