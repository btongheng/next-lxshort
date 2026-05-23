import Image from "next/image";
import movieSeries from "@/data/movieSeries";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const series = movieSeries.find((s) => s.id === parseInt(id));
  
  return {
    title: series?.name || "Series Detail",
    description: series?.category || "Watch latest movies and series",
  };
}

export default async function SeriesDetail({ params }) {
  const { id } = await params;
  const series = movieSeries.find((s) => s.id === parseInt(id));

  if (!series) {
    return (
      <div className="min-h-dvh bg-(--background) text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Series not found</h1>
          <Link href="/" className="text-(--primary) hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-(--background) text-white">
          <ScrollToTop />
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <Link 
          href="/"
          scroll={true}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-4 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer stream={series.stream} />
            
            <h1 className="text-2xl font-bold md:text-3xl">{series.name}</h1>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{series.category}</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">HD</span>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300">
                Watch {series.name} - {series.category?.toLowerCase()} series. Enjoy high-quality streaming 
                with our embedded player.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-9/12 h-56 overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src={series?.thumbnail?.trim() ? series.thumbnail : "https://via.placeholder.com/800x450?text=No+Image"}
                alt={series.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-lg">Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Title:</span>
                  <span>{series.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Category:</span>
                  <span>{series.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Quality:</span>
                  <span>HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}