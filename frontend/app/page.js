"use client";

import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import Sliders from "../components/sliders";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0A0D12]'>
      <NavBar />
      <Carousel />
      <Sliders />
    </div>
  );
}
