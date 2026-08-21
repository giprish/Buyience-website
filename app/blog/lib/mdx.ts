import "server-only";
import fs from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export async function getPostMdxSource(slug: string): Promise<string | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}
