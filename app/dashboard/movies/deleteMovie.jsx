"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function deleteMovie(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("movies")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Failed to delete movie");
  }

  revalidatePath("/dashboard/movies");
}