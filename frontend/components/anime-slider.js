import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AnimeSlider() {
  var intervalID = null;
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(0);
  const sliderCount = 12;
  const semaphoreRef = useRef(false);

  const nextSliderPage = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    sliderIndex + 1 == Math.ceil(sliderCount / sliderItems)
      ? setSliderIndex(0)
      : setSliderIndex(sliderIndex + 1);
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };

  const prevSliderPage = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    sliderIndex == 0
      ? setSliderIndex(Math.ceil(sliderCount / sliderItems) - 1)
      : setSliderIndex(sliderIndex - 1);
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;
      if (width < 768 && sliderItems != 2) {
        setSliderIndex(0);
        setSliderItems(2);
      } else if (width > 768 && width < 1280 && sliderItems != 3) {
        setSliderIndex(0);
        setSliderItems(3);
      } else if (width > 1280 && width < 1536 && sliderItems != 4) {
        setSliderIndex(0);
        setSliderItems(4);
      } else if (width > 1536 && sliderItems != 5) {
        setSliderIndex(0);
        setSliderItems(5);
      }
    };
    updateSlider();
    window.addEventListener("resize", updateSlider);
  }, []);

  useEffect(() => {
    intervalID = setInterval(() => {
      sliderIndex + 1 == Math.ceil(sliderCount / sliderItems)
        ? setSliderIndex(0)
        : setSliderIndex(sliderIndex + 1);
    }, 5000);

    return () => {
      clearTimeout(intervalID);
    };
  }, [sliderIndex]);

  return (
    <>
      <div className='pl-[1.75rem] md:pl-[2.25rem] xl:pl-[2.75rem] 2xl:pl-[3.25rem] text-sm md:text-lg xl:text-xl pb-2 pt-4 font-sans'>
        Popular Anime
      </div>
      <div className='group flex w-full justify-center'>
        <div
          className='w-[1.5rem] md:w-[2rem] xl:w-[2.5rem] 2xl:w-[3rem] z-10 mr-1 bg-transparent group-hover:bg-white/40 transition-all duration-500 ease-in-out cursor-pointer rounded-r-2xl'
          onClick={prevSliderPage}
          onTouchEnd={prevSliderPage}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-4xl md:text-5xl xl:text-7xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
            &#8249;
          </div>
        </div>
        <div className='w-full overflow-hidden'>
          <div
            className={
              `flex flex-grow transition-transform ease-in-out duration-1000 -translate-x-[` +
              100 * sliderIndex +
              `%]`
            }
          >
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide1.jpg'
                fill
                alt='Demon Slayer'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide2.jpg'
                fill
                alt='Jujutsu Kaisen'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide3.jpg'
                fill
                alt='Attack on Titan'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide4.jpg'
                fill
                alt='Naruto Shippuden'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide5.jpg'
                fill
                alt='My Hero Academia'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide6.jpg'
                fill
                alt='Black Clover'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide7.jpg'
                fill
                alt='Monster'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide8.jpg'
                fill
                alt='Death Note'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide9.jpg'
                fill
                alt='Spy x Family'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide10.jpg'
                fill
                alt='Hunter x Hunter'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide11.jpg'
                fill
                alt='My Dress-Up Darling'
              ></Image>
            </div>
            <div
              className={`w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 shrink-0 relative aspect-video`}
            >
              <Image
                className='object-cover px-2 rounded-2xl'
                src='/images/slider-anime/slide12.jpg'
                fill
                alt='Tokyo Ghoul'
              ></Image>
            </div>
          </div>
        </div>
        <div
          className='w-[1.5rem] md:w-[2rem] xl:w-[2.5rem] 2xl:w-[3rem] z-10 ml-1 bg-transparent group-hover:bg-white/40 transition-all duration-500 ease-in-out cursor-pointer rounded-l-2xl'
          onClick={nextSliderPage}
          onTouchEnd={nextSliderPage}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-4xl md:text-5xl xl:text-7xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
            &#8250;
          </div>
        </div>
      </div>
    </>
  );
}