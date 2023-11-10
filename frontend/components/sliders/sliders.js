"use client";

import AnimeSlider from "./anime-slider";
import MangaSlider from "./manga-slider";
import WatchingSlider from "./watching-slider";
import ReadingSlider from "./reading-slider";

export default function Sliders() {
  return (
    <div className="bg-[url('/images/background.png')] pb-10">
      <WatchingSlider />
      <ReadingSlider />
      <AnimeSlider />
      <MangaSlider />
    </div>
  );
}
