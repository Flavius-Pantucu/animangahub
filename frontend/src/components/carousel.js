import { Kings } from "next/font/google";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function MyCarousel() {
  var intervalID = null;
  const animeDescription = [
    {
      name: "Demon Slayer",
      genre: "Action, Adventure",
      rating: 5,
      release: 2019,
      type: "series",
      duration: "23m",
    },
    {
      name: "Violet Evergarden",
      genre: "Drama, Fantasy",
      rating: 4,
      release: 2018,
      type: "mini series",
      duration: "23m",
    },
    {
      name: "Spy x Family",
      genre: "Action, Comedy",
      rating: 4,
      release: 2022,
      type: "series",
      duration: "24m",
    },
    {
      name: "Attack on Titan",
      genre: "Action, Adventure",
      rating: 5,
      release: 2013,
      type: "series",
      duration: "23m",
    },
  ];
  const itemsNo = 4;
  const [currentItem, setCurrentItem] = useState(1);
  const semaphoreRef = useRef(false);

  const prevItem = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    currentItem == 1
      ? setCurrentItem(itemsNo)
      : setCurrentItem(currentItem - 1);
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };

  const nextItem = () => {
    if (semaphoreRef.current == true) return;
    semaphoreRef.current = true;
    currentItem == itemsNo
      ? setCurrentItem(1)
      : setCurrentItem(currentItem + 1);
    setTimeout(() => {
      semaphoreRef.current = false;
    }, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key == "ArrowLeft") prevItem();
    else if (event.key == "ArrowRight") nextItem();
    else return;
  };

  // useEffect(() => {
  //   intervalID = setInterval(() => {
  //     currentItem == itemsNo
  //       ? setCurrentItem(1)
  //       : setCurrentItem(currentItem + 1);
  //   }, 8000);

  //   return () => {
  //     clearTimeout(intervalID);
  //   };
  // }, [currentItem]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentItem]);

  return (
    <div className='flex w-full flex-1 mt-4'>
      <div className='absolute top-0 right-0 w-full h-full blur-[0px]'>
        <div className='absolute flex flex-col font-sans top-[85%] left-[10%] z-30'>
          <span className='text-6xl font-extrabold pb-4'>
            {animeDescription[currentItem - 1].name}
          </span>
          <div className='flex flex-row space-x-3 h-8 items-center'>
            <div className='text-sm'>
              {animeDescription[currentItem - 1].genre}
            </div>
            <div className='self-center opacity-40 w-2 h-2 rounded-full bg-white'></div>
            <div className='flex flex-row space-x-1'>
              {[...Array(animeDescription[currentItem - 1].rating)].map(
                (e, i) => (
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-5 h-5 text-yellow-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                )
              )}
            </div>
            <div className='self-center opacity-40 w-2 h-2 rounded-full bg-white'></div>
            <div className='text-sm'>
              {" "}
              {animeDescription[currentItem - 1].release}{" "}
            </div>
            <div className='self-center opacity-40 w-2 h-2 rounded-full bg-white'></div>
            <div className='border rounded-sm text-sm px-2 py-1 uppercase'>
              {" "}
              {animeDescription[currentItem - 1].type}
            </div>
          </div>
          <div className='flex flex-row space-x-2 h-4 items-center'>
            <div className='bg-white text-black text-xs h-full rounded-l-md pl-2 pr-1 font-medium'>
              PG-13
            </div>
            <div className='bg-yellow-400 text-black text-xs h-full px-1 font-medium'>
              HD
            </div>
            <div className='bg-cyan-400 text-black text-xs h-full rounded-r-md pl-1 pr-2 font-medium'>
              TV
            </div>
            <div className=''>{animeDescription[currentItem - 1].duration}</div>
          </div>
        </div>
        <div className='absolute top-[85%] left-[80%] z-30'>
          <button className='relative h-[50px] w-52 rounded-3xl overflow-hidden border-2 border-gray-200 bg-transparent text-gray-200 shadow-2xl transition-all duration-700 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-700 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-700 hover:text-white hover:border-rose-800 hover:shadow-rose-800/40 hover:before:w-2/4 hover:before:bg-rose-800 hover:after:w-2/4 hover:after:bg-rose-800'>
            <span className='flex flex-row justify-center items-center relative z-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                />
              </svg>
              <p className='font-sans pl-2 text-lg'>Watch Now</p>
            </span>
          </button>
        </div>
        <div>
          <Image
            fill
            id='item-1'
            className={` ${
              currentItem == 1 ? "opacity-50" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
            src='/images/wallpaper1.jpg'
            alt='...'
          />
        </div>
        <div>
          <Image
            fill
            id='item-2'
            className={` ${
              currentItem == 2 ? "opacity-50" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
            src='/images/wallpaper2.jpg'
            alt='...'
          />
        </div>
        <div>
          <Image
            fill
            id='item-3'
            className={` ${
              currentItem == 3 ? "opacity-50" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
            src='/images/wallpaper3.png'
            alt='...'
          />
        </div>
        <div>
          <Image
            fill
            id='item-4'
            className={` ${
              currentItem == 4 ? "opacity-50" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
            src='/images/wallpaper4.png'
            alt='...'
          />
        </div>
      </div>
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        <button
          type='button'
          onClick={() => setCurrentItem(1)}
          className={`transition-all duration-1000 ease-in-out w-3 h-3 rounded-full ${
            currentItem == 1 ? "bg-gray-100" : "bg-gray-400"
          } `}
        ></button>
        <button
          type='button'
          onClick={() => setCurrentItem(2)}
          className={`transition-all duration-1000 ease-in-out w-3 h-3 rounded-full ${
            currentItem == 2 ? "bg-gray-100" : "bg-gray-400"
          } `}
        ></button>
        <button
          type='button'
          onClick={() => setCurrentItem(3)}
          className={`transition-all duration-1000 ease-in-out w-3 h-3 rounded-full ${
            currentItem == 3 ? "bg-gray-100" : "bg-gray-400"
          } `}
        ></button>
        <button
          type='button'
          onClick={() => setCurrentItem(4)}
          className={`transition-all duration-1000 ease-in-out w-3 h-3 rounded-full ${
            currentItem == 4 ? "bg-gray-100" : "bg-gray-400"
          } `}
        ></button>
      </div>
      <button
        type='button'
        className='absolute top-[50%] left-0 z-30 flex pl-4 cursor-pointer group focus:outline-none'
        onClick={prevItem}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-500 ease-in-out'>
          <svg
            className='w-4 h-4 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 7 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-[50%] right-0 z-30 flex pr-4 cursor-pointer group focus:outline-none'
        onClick={nextItem}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-500 ease-in-out'>
          <svg
            className='w-4 h-4 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 5 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
