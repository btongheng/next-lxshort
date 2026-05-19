import channels from "@/data/channels";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return <HomeClient initialChannels={channels} />;
}