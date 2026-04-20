"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { getProfileByUserId } from "@/services/profiles";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  const profile = await getProfileByUserId(data.user.id);

  if (profile?.isSuperAdmin) {
    redirect("/workspace");
  } else {
    redirect("/dashboard");
  }
}
