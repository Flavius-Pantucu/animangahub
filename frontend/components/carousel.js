"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Carousel(props) {
  var intervalID = null;
  const items = props.items;
  const itemsNo = items.length;
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

  useEffect(() => {
    intervalID = setInterval(() => {
      currentItem == itemsNo
        ? setCurrentItem(1)
        : setCurrentItem(currentItem + 1);
    }, 8000);

    return () => {
      clearTimeout(intervalID);
    };
  }, [currentItem]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentItem]);

  return (
    <div className='flex w-full h-screen'>
      <div className='w-full h-full'>
        <div className='absolute flex flex-col font-sans bottom-[10%] left-[5%] lg:left-[10%] z-30'>
          <span className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl font-extrabold 2xl:pb-4 md:pb-2 pb-0 transition-all ease-in-out duration-500'>
            {items[currentItem - 1].name}
          </span>
          <div className='flex flex-row space-x-3 h-8 items-center'>
            <div className='lg:text-sm text-xs transition-all ease-in-out duration-500'>
              {items[currentItem - 1].genre}
            </div>
            <div className='self-center opacity-40 lg:w-2 lg:h-2 w-1.5 h-1.5 rounded-full bg-white transition-all ease-in-out duration-500'></div>
            <div className='hidden md:flex flex-row space-x-1'>
              {[...Array(items[currentItem - 1].rating)].map((e, i) => (
                <span key={i}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 transition-all ease-in-out duration-500'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              ))}
            </div>
            <div className='self-center opacity-40 lg:w-2 lg:h-2 w-1.5 h-1.5 rounded-full bg-white transition-all ease-in-out duration-500 hidden md:block'></div>
            <div className='lg:text-sm text-xs transition-all ease-in-out duration-500 hidden md:block'>
              {items[currentItem - 1].release}
            </div>
            <div className='self-center opacity-40 lg:w-2 lg:h-2 w-1.5 h-1.5 rounded-full bg-white transition-all ease-in-out duration-500 hidden md:block'></div>
            <div className='border rounded-sm lg:text-sm text-xs px-2 py-1 uppercase transition-all ease-in-out duration-500'>
              {items[currentItem - 1].type}
            </div>
          </div>
          <div className='flex-row space-x-1 lg:space-x-2 h-4 items-center transition-all ease-in-out duration-500 hidden md:flex'>
            <div className='bg-white text-black lg:scale-100 scale-90 text-xs h-full rounded-l-md px-2 font-medium'>
              PG-13
            </div>
            <div className='bg-yellow-400 text-black lg:scale-100 scale-90 text-xs h-full px-2 font-medium'>
              HD
            </div>
            <div className='bg-cyan-400 text-black lg:scale-100 scale-90 text-xs h-full rounded-r-md px-2 font-medium'>
              TV
            </div>
            <div className='text-xs lg:text-sm lg:scale-100 scale-90'>
              {items[currentItem - 1].duration}
            </div>
          </div>
        </div>
        <div className='absolute bottom-[10%] right-[5%] lg:right-[10%] z-30'>
          <button className='relative h-[40px] md:h-[50px] w-36 lg:w-44 2xl:w-52 rounded-3xl overflow-hidden border-2 border-gray-200 bg-transparent text-gray-200 shadow-2xl transition-all duration-700 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-700 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-700 hover:text-white hover:border-rose-800 hover:shadow-rose-800/40 hover:before:w-2/4 hover:before:bg-rose-800 hover:after:w-2/4 hover:after:bg-rose-800'>
            <span className='flex flex-row justify-center items-center relative z-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='lg:w-5 lg:h-5 w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                />
              </svg>
              <p className='font-sans pl-2 2xl:text-lg lg:text-sm text-xs'>
                Watch Now
              </p>
            </span>
          </button>
        </div>
        <div>
          {[...Array(itemsNo)].map((e, i) => (
            <Image
              key={i}
              fill
              id={"item-" + i}
              className={` ${
                currentItem == i + 1 ? "opacity-60" : "opacity-0"
              } transition-all duration-1000 ease-in-out md:block hidden`}
              src={"/images/carousel-desktop/" + items[i].url}
              sizes=''
              alt='...'
            />
          ))}
          {[...Array(itemsNo)].map((e, i) => (
            <Image
              key={i}
              fill
              id={"item-" + i}
              className={` ${
                currentItem == i + 1 ? "opacity-50" : "opacity-0"
              } transition-all duration-1000 ease-in-out md:hidden`}
              src={"/images/carousel-mobile/wallpaper" + items[i].url}
              sizes=''
              alt='...'
            />
          ))}
        </div>
      </div>
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        {[...Array(itemsNo)].map((e, i) => (
          <button
            key={i}
            type='button'
            onClick={() => setCurrentItem(i + 1)}
            className={`transition-all duration-1000 ease-in-out lg:w-3 lg:h-3 w-2 h-2 rounded-full ${
              currentItem == i + 1 ? "bg-gray-100" : "bg-gray-400"
            } `}
          ></button>
        ))}
      </div>
      <button
        type='button'
        className='absolute top-[50%] left-0 z-30 flex pl-4 cursor-pointer group focus:outline-none'
        onClick={prevItem}
      >
        <span className='inline-flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-500 ease-in-out'>
          <svg
            className='lg:w-4 lg:h-4 w-3 h-3 text-white'
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
        <span className='inline-flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-500 ease-in-out'>
          <svg
            className='lg:w-4 lg:h-4 w-3 h-3'
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
