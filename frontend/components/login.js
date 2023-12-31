import Image from "next/image";
import { useEffect } from "react";

export default function Login(props) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") props.setLogin(false);
    return;
  };

  const closeModal = (event) => {
    if (event.target.id === "loginModal" || event.target.id === "closeButton")
      props.setLogin(false);
    return;
  };

  const openRegister = (event) => {
    props.setLogin(false);
    props.setRegister(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div
      onClick={closeModal}
      className='absolute w-full h-full top-0 left-0 bg-gray-950/90 z-40'
    >
      <div
        onClick={closeModal}
        className='absolute right-10 top-10 transition-all hover:scale-125 ease-in-out duration-300 cursor-pointer'
      >
        <svg
          id='closeButton'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div
        className='flex flex-col items-center justify-center h-screen'
        id='loginModal'
      >
        <a
          href='#'
          className='flex items-center mb-4 text-2xl font-semibold text-white'
        >
          <Image
            className='w-28 h-28 mr-2 rounded-full transition-all duration-500 ease-in-out animate-bounce hover:scale-110'
            width={200}
            height={200}
            src='/images/icon.png'
            alt='logo'
          />
        </a>
        <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
          <div className='p-6 space-y-3 md:space-y-4'>
            <h1 className='text-center font-bold leading-tight tracking-tight text-lg text-white'>
              Ōkaerinasai! - Welcome back!
            </h1>
            <div className='space-y-3 md:space-y-4'>
              <div>
                <label
                  for='username'
                  class='block mb-2 text-sm font-medium text-white'
                >
                  Username
                </label>
                <div class='relative'>
                  <div class='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-4 h-4 text-gray-400'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='username'
                    className='transition-colors duration-500 ease-in-out sm:text-sm rounded-lg block w-full pl-9 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500'
                    placeholder='weloveanime'
                  />
                </div>
              </div>
              <div>
                <label
                  for='password'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Password
                </label>
                <div class='relative'>
                  <div class='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-4 h-4 text-gray-400'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••••'
                    className='transition-colors duration-500 ease-in-out sm:text-sm rounded-lg block w-full pl-9 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500'
                    required=''
                  />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 rounded bg-gray-700 focus:outline-0 focus:ring-0 focus:border-0 border-0 outline-0 ring-0 border-gray-600  '
                      required=''
                    />
                  </div>
                  <div className='ml-1 text-sm'>
                    <label
                      for='remember'
                      className='text-gray-300'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href='#'
                  className='text-sm font-medium hover:underline text-cyan-500'
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700 transition-all duration-500 ease-in-out'
              >
                Sign in
              </button>
              <p className='text-center text-sm font-light text-gray-400'>
                Don’t have an account yet?
                <a
                  onClick={openRegister}
                  href='#'
                  className='font-medium text-cyan-500 hover:underline pl-1'
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
