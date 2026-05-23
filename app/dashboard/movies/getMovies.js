"use server";

import { createClient } from "@/lib/supabase/server";

export async function getMovies({ page = 1, limit = 10, search = '', sort = 'created_at', order = 'desc' }) {
  const supabase = await createClient();

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("movies")
    .select("*", { count: "exact" });

  if (search) {
    query = query.ilike("title", `%${search}%`);
  }

  const { data, error, count } = await query
    .order(sort, { ascending: order === 'asc' })
    .range(from, to);

  if (error) {
    throw new Error("Failed to fetch movies");
  }

  return {
    movies: data || [],
    total: count || 0,
    limit,
  };
}
