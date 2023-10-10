import localFont from "next/font/local";

const goodTimesRg = localFont({
  src: [
    {
      path: "../../public/fonts/goodtimesrg.otf",
      weight: "400",
    },
  ],
  variable: "--font-goodtimesrg",
});

export default function NavBar() {
  return (
    <div className='flex flex-row justify-evenly pt-2'>
      <div className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 h-10 aspect-square items-end justify-center flex ml-5 lg:ml-10 z-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='md:w-6 md:h-6 w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
          />
        </svg>
      </div>
      <div className='flex flex-auto justify-end mr-6 sm:mr-8 md:mr-10 lg:mr-14 xl:mr-20 2xl:mr-28 items-end h-10'>
        <p
          className={`${goodTimesRg.variable} font-sans text-xs md:text-md xl:text-lg cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-500 z-20`}
        >
          Anime
        </p>
      </div>
      <div className='flex flex-row'>
        <div
          className={`flex place-items-center h-0 w-0 pt-4 z-10
            before:absolute before:w-[45%] before:h-[80px] before:rounded-full before:blur-2xl before:-translate-x-[100%] before:bg-gradient-to-r before:from-transparent before:to-red-700 before:opacity-60 
            after:absolute after:w-[240px] after:h-[80px] after:-translate-x-[66%] after:blur-2xl after:bg-gradient-conic after:from-black after:via-red-600 after:to-[#ab3535] after:opacity-60
            `}
        ></div>
        <div
          className={`${goodTimesRg.variable} font-sans flex h-10 items-end cursor-pointer hover:scale-110 hover:text-transparent bg-white hover:bg-gradient-to-r bg-clip-text hover:from-red-500 hover:to-blue-500 transition-all ease-in-out duration-700 z-20`}
        >
          <span className='text-lg/4 lg:text-3xl/8'>A</span>
          <span className='text-sm/4 lg:text-xl/8'>ni</span>
          <span className='text-lg/4 lg:text-3xl/8'>M</span>
          <span className='text-sm/4 lg:text-xl/8'>anga</span>
          <span className='text-[6px]/4 lg:text-[10px]/8'>Hub</span>
        </div>
        <div
          className={`flex place-items-center h-0 w-0 pt-4 z-10
            before:absolute before:w-[45%] before:h-[80px] before:rounded-full before:blur-2xl before:bg-gradient-to-l before:from-transparent before:to-blue-700 before:opacity-60
            after:absolute after:w-[240px] after:h-[80px] after:-translate-x-[33%] after:blur-2xl after:bg-gradient-conic after:from-sky-500 after:via-[#0141ff] after:opacity-60
           `}
        ></div>
      </div>
      <div className='flex flex-auto justify-start ml-6 sm:ml-8 md:ml-10 lg:ml-14 xl:ml-20 2xl:ml-28 items-end h-10'>
        <p
          className={`${goodTimesRg.variable} font-sans text-xs md:text-md xl:text-lg cursor-pointer hover:scale-125 hover:text-blue-500 transition-all duration-500 z-10`}
        >
          Manga
        </p>
      </div>
      <div className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 h-10 aspect-square items-end justify-center flex mr-5 lg:mr-10 z-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='md:w-6 md:h-6 w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
    </div>
  );
}
