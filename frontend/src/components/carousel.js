import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function MyCarousel() {
  var intervalID = null;
  const itemsNo = 3;
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

  useEffect(() => {
    intervalID = setInterval(() => {
      currentItem == itemsNo
        ? setCurrentItem(1)
        : setCurrentItem(currentItem + 1);
    }, 5000);

    return () => {
      clearTimeout(intervalID);
    };
  }, [currentItem]);

  return (
    <div className='flex w-full flex-1 mt-4'>
      <div className='absolute top-0 right-0 w-full h-full blur-[4px]'>
        <Image
          fill
          id='item-1'
          className={` ${
            currentItem == 1 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-in-out`}
          src='/images/wallpaper1.jpg'
          alt='...'
        />
        <Image
          fill
          id='item-2'
          className={` ${
            currentItem == 2 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-in-out`}
          src='/images/wallpaper2.jpg'
          alt='...'
        />
        <Image
          fill
          id='item-3'
          className={` ${
            currentItem == 3 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-in-out`}
          src='/images/wallpaper3.jpg'
          alt='...'
        />
      </div>
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        <button
          type='button'
          className='w-3 h-3 rounded-full bg-gray-400'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full bg-gray-400'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full bg-gray-400'
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
