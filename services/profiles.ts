import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { profiles } from "@/db/schema";

export async function getProfileByUserId(userId: string) {
  const result = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, userId))
    .limit(1);

  return result[0] ?? null;
}
