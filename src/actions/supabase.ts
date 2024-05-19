'use server';

import { createClientServer } from "@/utils/supabase/server";

export async function registerWithEmailAndPassword({
  email,
}: {
  email: string;
}) {
  console.log(email);
  const supabase = createClientServer();
  const res = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}`
    }
  })
  return JSON.stringify(res)
}
