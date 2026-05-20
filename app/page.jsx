import movieSeries from "@/data/movieSeries";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return <HomeClient initialSeries={movieSeries} />;
}