// app/dashboard/page.jsx

import Link from "next/link";
import { getMovies } from "@/app/dashboard/movies/getMovies";

export default async function DashboardPage({ searchParams }) {
  const page = Number(searchParams?.page || 1);
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "created_at";
  const order = searchParams?.order || "desc";

  const { movies, total, limit } = await getMovies({
    page,
    limit: 10,
    search,
    sort,
    order,
  });

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-[#060b1a] text-white">
      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[260px] bg-[#0b1120] border-r border-white/10 min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-10">
            Movie<span className="text-yellow-400">Admin</span>
          </h1>

          <nav className="space-y-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/movies/create"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Add Movie
            </Link>

            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Website
            </Link>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold">Movies Dashboard</h2>
              <p className="text-gray-400 mt-1">
                Manage your movie collection
              </p>
            </div>

            <Link
              href="/dashboard/movies/create"
              className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold px-5 py-3 rounded-xl"
            >
              + Add Movie
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Total Movies</p>
              <h3 className="text-4xl font-bold mt-2">{total}</h3>
            </div>

            <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm">HD Movies</p>
              <h3 className="text-4xl font-bold mt-2">
                {movies.filter((m) => m.quality === "HD").length}
              </h3>
            </div>

            <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Latest Release</p>
              <h3 className="text-4xl font-bold mt-2">
                {movies[0]?.year || "-"}
              </h3>
            </div>
          </div>

          {/* Search + Sort */}
          <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-5 mb-6">
            <form className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="search"
                defaultValue={search}
                placeholder="Search movie..."
                className="flex-1 bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none"
              />

              <select
                name="sort"
                defaultValue={sort}
                className="bg-[#111827] border border-white/10 rounded-xl px-4 py-3"
              >
                <option value="created_at">Newest</option>
                <option value="title">Title</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
              </select>

              <select
                name="order"
                defaultValue={order}
                className="bg-[#111827] border border-white/10 rounded-xl px-4 py-3"
              >
                <option value="desc">DESC</option>
                <option value="asc">ASC</option>
              </select>

              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl">
                Search
              </button>
            </form>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-[#0b1120] border border-white/10 rounded-2xl">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr className="text-left text-gray-400">
                  <th className="p-5">Poster</th>
                  <th className="p-5">Movie</th>
                  <th className="p-5">Genre</th>
                  <th className="p-5">Rating</th>
                  <th className="p-5">Year</th>
                  <th className="p-5">Quality</th>
                  <th className="p-5">Actions</th>
                </tr>
              </thead>

              <tbody>
                {movies.map((movie) => (
                  <tr
                    key={movie.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-5">
                      <img
                        src={movie.poster_url}
                        alt={movie.title}
                        className="w-17.5 h-25 rounded-xl object-cover"
                      />
                    </td>

                    <td className="p-5">
                      <h4 className="font-semibold text-lg">
                        {movie.title}
                      </h4>

                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {movie.tagline}
                      </p>
                    </td>

                    <td className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {movie.genres?.map((genre) => (
                          <span
                            key={genre}
                            className="bg-white/10 px-3 py-1 rounded-full text-sm"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="p-5">
                      ⭐ {movie.rating}
                    </td>

                    <td className="p-5">
                      {movie.year}
                    </td>

                    <td className="p-5">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {movie.quality}
                      </span>
                    </td>

                    <td className="p-5">
                      <div className="flex gap-3">
                        <Link
                          href={`/dashboard/movies/${movie.id}`}
                          className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg text-sm"
                        >
                          View
                        </Link>

                        <Link
                          href={`/dashboard/movies/edit/${movie.id}`}
                          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg text-sm"
                        >
                          Edit
                        </Link>

                        <form
                          action={async () => {
                            "use server";
                            const { deleteMovie } = await import(
                              "@/app/dashboard/movies/deleteMovie"
                            );

                            await deleteMovie(movie.id);
                          }}
                        >
                          <button className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg text-sm">
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}

                {movies.length === 0 && (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-10 text-gray-400"
                    >
                      No movies found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Link
                key={index}
                href={`?page=${index + 1}&search=${search}&sort=${sort}&order=${order}`}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-semibold ${
                  page === index + 1
                    ? "bg-yellow-500 text-black"
                    : "bg-[#0b1120] border border-white/10"
                }`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}