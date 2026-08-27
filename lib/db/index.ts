import "server-only";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

declare global {
  var __buyienceDb: Db | undefined;
}

export function getDb(): Db {
  if (globalThis.__buyienceDb) {
    return globalThis.__buyienceDb;
  }

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(url);
  const instance = drizzle(sql, { schema });
  globalThis.__buyienceDb = instance;
  return instance;
}
