import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <>
      <div className='group flex w-full justify-center overflow-hidden'>
        <div
          className='w-[4rem] z-10 my-2 bg-black/30 group-hover:bg-black/50 transition-all duration-500 ease-in-out cursor-pointer rounded-r-2xl pr-4'
          onClick={() => setSliderIndex(sliderIndex - 1)}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-7xl group-hover:scale-125 transition-all duration-500 ease-in-out'>
            &#8249;
          </div>
        </div>
        <div
          className={`flex flex-grow transition-transform ease-in-out duration-1000 -translate-x-[calc(100%*${sliderIndex})]`}
        >
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=1'
              fill
              alt='1'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=2'
              fill
              alt='2'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=3'
              fill
              alt='3'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=4'
              fill
              alt='4'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=5'
              fill
              alt='5'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=6'
              fill
              alt='6'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=7'
              fill
              alt='7'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=8'
              fill
              alt='8'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=9'
              fill
              alt='9'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=10'
              fill
              alt='10'
            ></Image>
          </div>
          <div className='w-1/5 shrink-0 relative aspect-video'>
            <Image
              className='object-cover p-3 rounded-2xl'
              src='https://placehold.co/200?text=11'
              fill
              alt='11'
            ></Image>
          </div>
        </div>
        <div
          className='w-[4rem] z-10 my-2 bg-black/30 group-hover:bg-black/50 transition-all duration-500 ease-in-out cursor-pointer rounded-l-2xl pl-4'
          onClick={() => setSliderIndex(sliderIndex + 1)}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-7xl group-hover:scale-125 transition-all duration-500 ease-in-out'>
            &#8250;
          </div>
        </div>
      </div>
    </>
  );
}
