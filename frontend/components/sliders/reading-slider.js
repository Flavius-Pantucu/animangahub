import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ReadingSlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(0);
  const sliderCount = 12;
  const semaphoreRef = useRef(false);

  const nextSliderPage = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    const prevTranslate = 100 * sliderIndex;
    var nextTranslate;
    if (sliderIndex + 1 == Math.ceil(sliderCount / sliderItems)) {
      nextTranslate = 0;
      setSliderIndex(0);
    } else {
      nextTranslate = 100 * (sliderIndex + 1);
      setSliderIndex(sliderIndex + 1);
    }
    document
      .getElementById("readingSlider")
      .classList.remove("-translate-x-[" + prevTranslate + "%]");

    document
      .getElementById("readingSlider")
      .classList.add("-translate-x-[" + nextTranslate + "%]");
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };

  const prevSliderPage = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    const prevTranslate = 100 * sliderIndex;
    var nextTranslate;
    if (sliderIndex + 1 == 0) {
      nextTranslate = Math.ceil(sliderCount / sliderItems) - 1;
      setSliderIndex(Math.ceil(sliderCount / sliderItems) - 1);
    } else {
      nextTranslate = 100 * (sliderIndex - 1);
      setSliderIndex(sliderIndex - 1);
    }
    document
      .getElementById("readingSlider")
      .classList.remove("-translate-x-[" + prevTranslate + "%]");

    document
      .getElementById("readingSlider")
      .classList.add("-translate-x-[" + nextTranslate + "%]");
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };
  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;
      if (width < 768 && sliderItems != 2) {
        setSliderIndex(0);
        setSliderItems(3);
      } else if (width > 768 && width < 1280 && sliderItems != 4) {
        setSliderIndex(0);
        setSliderItems(4);
      } else if (width > 1280 && width < 1536 && sliderItems != 6) {
        setSliderIndex(0);
        setSliderItems(6);
      } else if (width > 1536 && sliderItems != 8) {
        setSliderIndex(0);
        setSliderItems(8);
      }
    };
    updateSlider();
    window.addEventListener("resize", updateSlider);
  }, []);

  return (
    <>
      <div className='pl-[2rem] md:pl-[2.5rem] xl:pl-[3rem] 2xl:pl-[3.5rem] text-sm md:text-lg xl:text-xl pb-2 pt-4 font-sans'>
        Continue Reading
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
        <div className='w-full overflow-hidden mx-2'>
          <div
            id='readingSlider'
            className='flex flex-grow transition-transform ease-in-out duration-[1500ms] -translate-x-[0%]'
          >
            <div className='w-1/3 md:w-1/4 xl:w-1/6 2xl:w-[12.5%] shrink-0 aspect-[1/1.5] relative px-1'>
              <div className='relative aspect-[1/1.5] z-10 cursor-pointer'>
                <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-12 h-12 text-white'
                  >
                    <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
                  </svg>
                </div>
                <Image
                  className='object-cover cursor-pointer rounded-2xl'
                  src='/images/slider-manga/slide9.jpg'
                  fill
                  alt='Oshi No Ko'
                ></Image>
              </div>
              <div className='flex w-full justify-center'>
                <div className='w-[80%] h-1.5 mt-1.5 bg-gradient-to-r from-red-700 from-10% to-15% to-gray-300 rounded-full'></div>
              </div>
            </div>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 2xl:w-[12.5%] shrink-0 aspect-[1/1.5] relative px-1'>
              <div className='relative aspect-[1/1.5] z-10 cursor-pointer'>
                <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-12 h-12 text-white'
                  >
                    <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
                  </svg>
                </div>
                <Image
                  className='object-cover cursor-pointer rounded-2xl'
                  src='/images/slider-manga/slide6.jpg'
                  fill
                  alt='Boruto'
                ></Image>
              </div>
              <div className='flex w-full justify-center'>
                <div className='w-[80%] h-1.5 mt-1.5 bg-gradient-to-r from-red-700 from-40% to-45% to-gray-300 rounded-full'></div>
              </div>
            </div>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 2xl:w-[12.5%] shrink-0 aspect-[1/1.5] relative px-1'>
              <div className='relative aspect-[1/1.5] z-10 cursor-pointer'>
                <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-12 h-12 text-white'
                  >
                    <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
                  </svg>
                </div>
                <Image
                  className='object-cover cursor-pointer rounded-2xl'
                  src='/images/slider-manga/slide2.jpg'
                  fill
                  alt='Jujutsu Kaisen'
                ></Image>
              </div>
              <div className='flex w-full justify-center'>
                <div className='w-[80%] h-1.5 mt-1.5 bg-gradient-to-r from-red-700 from-90% to-95% to-gray-300 rounded-full'></div>
              </div>
            </div>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 2xl:w-[12.5%] shrink-0 aspect-[1/1.5] relative px-1'>
              <div className='relative aspect-[1/1.5] z-10 cursor-pointer'>
                <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-12 h-12 text-white'
                  >
                    <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
                  </svg>
                </div>
                <Image
                  className='object-cover cursor-pointer rounded-2xl'
                  src='/images/slider-manga/slide7.jpg'
                  fill
                  alt='Demon Slayer'
                ></Image>
              </div>
              <div className='flex w-full justify-center'>
                <div className='w-[80%] h-1.5 mt-1.5 bg-gradient-to-r from-red-700 from-80% to-85% to-gray-300 rounded-full'></div>
              </div>
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
