import { createMovie } from "@/app/dashboard/movies/createMovie";

export default function CreateMoviePage() {
  return (
    <form
      action={createMovie}
      className="max-w-2xl mx-auto p-6 space-y-4"
    >
      <input
        name="title"
        placeholder="Movie Title"
        className="border p-2 w-full"
      />

      <input
        name="slug"
        placeholder="movie-slug"
        className="border p-2 w-full"
      />

      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full"
      />

      <input
        name="tagline"
        placeholder="Tagline"
        className="border p-2 w-full"
      />

      <input
        name="poster_url"
        placeholder="Poster URL"
        className="border p-2 w-full"
      />

      <input
        name="backdrop_url"
        placeholder="Backdrop URL"
        className="border p-2 w-full"
      />

      <input
        name="quality"
        placeholder="HD"
        className="border p-2 w-full"
      />

      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="7.7"
        className="border p-2 w-full"
      />

      <input
        type="number"
        name="imdb_votes"
        placeholder="95339"
        className="border p-2 w-full"
      />

      <input
        type="date"
        name="release_date"
        className="border p-2 w-full"
      />

      <input
        type="number"
        name="year"
        placeholder="2026"
        className="border p-2 w-full"
      />

      <input
        name="country"
        placeholder="United States"
        className="border p-2 w-full"
      />

      <input
        name="language"
        placeholder="English"
        className="border p-2 w-full"
      />

      <input
        name="genres"
        placeholder="Music, Drama"
        className="border p-2 w-full"
      />

      <input
        name="cast_members"
        placeholder="Actor 1, Actor 2"
        className="border p-2 w-full"
      />

      <button className="bg-black text-white px-4 py-2">
        Create Movie
      </button>
    </form>
  );
}