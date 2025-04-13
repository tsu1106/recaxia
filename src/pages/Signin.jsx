import React from 'react';

function Signin() {
    return (
      <div className="min-h-screen bg-dgray flex items-center justify-center py-12 px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <div className="text-center">
            <img
              alt="Your Company"
              src="./public/images/logo.png"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-ameth">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder='example@example.com'
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lblue sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-ameth hover:text-lblue">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lblue sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-ameth px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-lblue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lblue"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-white">
              Not a member?{' '}
              <a href="/signup" className="font-semibold text-ameth hover:text-lblue">
                signup
              </a>
            </p>
          </div>
        </div>
      </div>
  )
}
export default Signin