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
      .getElementById("animeContainer")
      .classList.remove("-translate-x-[" + prevTranslate + "%]");

    document
      .getElementById("animeContainer")
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
      .getElementById("animeContainer")
      .classList.remove("-translate-x-[" + prevTranslate + "%]");

    document
      .getElementById("animeContainer")
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
    document
      .getElementById("animeContainer")
      .classList.remove("translate-x-[100%]");

    document
      .getElementById("animeContainer")
      .classList.add("-translate-x-[0%]");
  }, []);

  useEffect(() => {
    intervalID = setInterval(() => {
      nextSliderPage();
    }, 6000);

    return () => {
      clearTimeout(intervalID);
    };
  }, [sliderIndex]);

  return (
    <>
      <div className='pl-[2rem] md:pl-[2.5rem] xl:pl-[3rem] 2xl:pl-[3.5rem] text-sm md:text-lg xl:text-xl pb-2 pt-4 font-sans'>
        Popular Anime
      </div>
      <div className='group flex w-full justify-center'>
        <div
          className='w-[1.5rem] md:w-[2rem] xl:w-[2.5rem] 2xl:w-[3rem] z-10 mr-1 bg-transparent group-hover:bg-white/40 transition-all duration-500 ease-in-out cursor-pointer rounded-r-2xl'
          onClick={prevSliderPage}
          onTouchEnd={prevSliderPage}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-4xl md:text-5xl xl:text-7xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out select-none'>
            &#8249;
          </div>
        </div>
        <div className='w-full overflow-hidden mx-2'>
          <div
            id='animeContainer'
            className='flex flex-grow transition-all ease-in-out duration-[1500ms] translate-x-[100%]'
          >
            {[...Array(sliderCount)].map((e, i) => (
              <div
                key={i}
                className='flex flex-col shrink-0 w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 px-1'
              >
                <div className='relative aspect-video z-10 cursor-pointer'>
                  <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 rounded-2xl'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-16 h-16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <Image
                    className='w-full object-cover cursor-pointer rounded-2xl'
                    src={"/images/slider-anime/slide" + (i + 1) + ".jpg"}
                    fill
                    alt=''
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className='w-[1.5rem] md:w-[2rem] xl:w-[2.5rem] 2xl:w-[3rem] z-10 ml-1 bg-transparent group-hover:bg-white/40 transition-all duration-500 ease-in-out cursor-pointer rounded-l-2xl'
          onClick={nextSliderPage}
          onTouchEnd={nextSliderPage}
        >
          <div className='h-full w-full flex justify-center items-center leading-none text-4xl md:text-5xl xl:text-7xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out select-none'>
            &#8250;
          </div>
        </div>
      </div>
    </>
  );
}
