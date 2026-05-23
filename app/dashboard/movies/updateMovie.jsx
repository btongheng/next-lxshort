"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateMovie(id, formData) {
  const supabase = await createClient();

  const updatedMovie = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    tagline: formData.get("tagline"),

    poster_url: formData.get("poster_url"),
    backdrop_url: formData.get("backdrop_url"),

    quality: formData.get("quality"),
    rating: Number(formData.get("rating")),
    imdb_votes: Number(formData.get("imdb_votes")),

    release_date: formData.get("release_date"),
    year: Number(formData.get("year")),

    country: formData.get("country"),
    language: formData.get("language"),

    genres: formData
      .get("genres")
      .split(",")
      .map((g) => g.trim()),

    cast_members: formData
      .get("cast_members")
      .split(",")
      .map((c) => c.trim()),
  };

  const { error } = await supabase
    .from("movies")
    .update(updatedMovie)
    .eq("id", id);

  if (error) {
    throw new Error("Failed to update movie");
  }

  revalidatePath("/dashboard/movies");
  revalidatePath(`/dashboard/movies/${id}`);
}