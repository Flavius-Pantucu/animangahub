import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideItems, setSlideItems] = useState(5);
  const sliderCount = useRef(11);

  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;
      if (width < 768) setSlideItems(2);
      else if (width > 768 && width < 1280) setSlideItems(3);
      else if (width > 1280 && width < 1536) setSlideItems(4);
      else setSlideItems(5);
    };
    window.addEventListener("resize", updateSlider);
    updateSlider();
  }, []);

  return (
    <>
      <div className='group flex w-full justify-center overflow-hidden pt-2'>
        <div
          className='w-[3rem] z-10 my-3 mr-2 bg-white/30 group-hover:bg-white/50 transition-all duration-500 ease-in-out cursor-pointer rounded-r-2xl'
          onClick={() =>
            slideIndex == 0
              ? setSlideIndex(Math.floor(sliderCount.current / slideItems))
              : setSlideIndex(slideIndex - 1)
          }
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-7xl group-hover:scale-125 transition-all duration-500 ease-in-out'>
            &#8249;
          </div>
        </div>
        <div
          className={`flex flex-grow transition-transform ease-in-out duration-1000 -translate-x-[calc(100%*${slideIndex})]`}
        >
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide1.jpg'
              fill
              alt='Demon Slayer'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide2.jpg'
              fill
              alt='Jujutsu Kaisen'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide3.jpg'
              fill
              alt='Attack on Titan'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide4.jpg'
              fill
              alt='Naruto Shippuden'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide5.jpg'
              fill
              alt='My Hero Academia'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide6.jpg'
              fill
              alt='Black Clover'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide7.jpg'
              fill
              alt='Monster'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide8.jpg'
              fill
              alt='Death Note'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide9.jpg'
              fill
              alt='Spy x Family'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide10.jpg'
              fill
              alt='Hunter x Hunter'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide11.jpg'
              fill
              alt='My Dress-Up Darling'
            ></Image>
          </div>
          <div className={`w-1/${slideItems} shrink-0 relative aspect-video`}>
            <Image
              className='object-cover px-2 py-3 rounded-2xl'
              src='/images/slider-anime/slide12.jpg'
              fill
              alt='Tokyo Ghoul'
            ></Image>
          </div>
        </div>
        <div
          className='w-[3rem] z-10 my-3 ml-2 bg-white/30 group-hover:bg-white/50 transition-all duration-500 ease-in-out cursor-pointer rounded-l-2xl'
          onClick={() =>
            slideIndex == Math.floor(sliderCount.current / slideItems)
              ? setSlideIndex(0)
              : setSlideIndex(slideIndex + 1)
          }
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-7xl group-hover:scale-125 transition-all duration-500 ease-in-out'>
            &#8250;
          </div>
        </div>
      </div>
    </>
  );
}
