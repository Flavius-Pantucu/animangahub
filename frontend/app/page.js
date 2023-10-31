"use client";

import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import Slider from "../components/slider";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0A0D12]'>
      <NavBar />
      <Carousel />
      <Slider />
    </div>
  );
}
