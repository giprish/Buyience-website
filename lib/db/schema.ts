import { boolean, index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const FORM_TYPES = [
  "demo",
  "contact",
  "solution_partner",
  "technology_partner",
] as const;

export type FormType = (typeof FORM_TYPES)[number];

export const leadSubmissions = pgTable(
  "lead_submissions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    formType: text("form_type").$type<FormType>().notNull(),
    email: text("email").notNull(),
    payload: jsonb("payload").$type<Record<string, unknown>>().notNull(),
    honeypotTriggered: boolean("honeypot_triggered").notNull().default(false),
    ip: text("ip"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("lead_submissions_email_idx").on(table.email)],
);
