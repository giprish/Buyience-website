import type { Metadata } from "next";

export const SITE_URL = "https://buyience.com";

const DEFAULT_OG_IMAGE = "/og.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Override default OG/Twitter image path or absolute URL */
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
