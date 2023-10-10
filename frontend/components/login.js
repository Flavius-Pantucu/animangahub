import Image from "next/image";

export default function Login() {
  return (
    <div className='absolute w-full h-full top-0 left-0 bg-gray-950/80 z-40'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-white'
        >
          <Image
            className='w-28 h-28 mr-2 rounded-full'
            width={200}
            height={200}
            src='/images/icon.png'
            alt='logo'
          />
        </a>
        <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white'>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                  placeholder='name@company.com'
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
                  className=' sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
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
                      className='w-4 h-4 border rounded focus:ring-3  bg-gray-700 border-gray-600 focus:ring-cyan-600 ring-offset-gray-800'
                      required=''
                    />
                  </div>
                  <div className='ml-3 text-sm'>
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
                className='w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-400'>
                Don’t have an account yet?
                <a
                  href='#'
                  className='font-medium text-cyan-500 hover:underline'
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
