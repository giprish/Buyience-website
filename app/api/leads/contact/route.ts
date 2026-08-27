import { handleLeadPost } from "@/lib/leads/handler";

export async function POST(request: Request) {
  return handleLeadPost("contact", request);
}
