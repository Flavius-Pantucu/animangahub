import Image from "next/image";
import { useEffect } from "react";

export default function Register(props) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") props.setRegister(false);
    return;
  };

  const closeModal = (event) => {
    if (
      event.target.id === "registerModal" ||
      event.target.id === "closeButton"
    )
      props.setRegister(false);
    return;
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
        id='registerModal'
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
              Irasshaimase! - Welcome!
            </h1>
            <div className='space-y-3 md:space-y-4'>
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Username/Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='transition-colors duration-500 ease-in-out border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500'
                  placeholder='placeholder'
                  required=''
                />
              </div>
              <div>
                <label
                  for='password'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='transition-colors duration-500 ease-in-out sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500'
                  required=''
                />
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
