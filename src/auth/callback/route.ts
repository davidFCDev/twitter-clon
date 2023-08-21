import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function callback(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
}
