import AnimeSlider from "./anime-slider";
import MangaSlider from "./manga-slider";

export default function Sliders() {
  return (
    <div className="bg-[url('/images/background.png')] pb-10">
      <AnimeSlider></AnimeSlider>
      <MangaSlider></MangaSlider>
    </div>
  );
}
