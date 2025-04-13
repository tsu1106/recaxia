import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [userType, setUserType] = useState('jobseeker');

  return (
    <div className="min-h-screen bg-dgray flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <img
            alt="Your Company"
            src="./public/images/logo.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-ameth">
            Create your account
          </h2>
        </div>

        {/* Role Selection Tabs */}
        <div className="mt-6 flex rounded-md bg-lgray p-1">
          <button
            type="button"
            onClick={() => setUserType('jobseeker')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              userType === 'jobseeker' ? 'bg-ameth text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setUserType('company')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              userType === 'company' ? 'bg-ameth text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Company
          </button>
        </div>

        <div className="mt-8">
          <form className="space-y-6">
            {/* Conditional Fields Based on User Type */}
            {userType === 'jobseeker' ? (
              <>
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-white">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-white">
                    Skills
                  </label>
                  <div className="mt-2">
                    <input
                      id="skills"
                      name="skills"
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                      placeholder="Separate with commas (e.g., JavaScript, React)"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white">
                    Company Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-white">
                    Industry
                  </label>
                  <div className="mt-2">
                    <select
                      id="industry"
                      name="industry"
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                    >
                      <option value="">Select industry</option>
                      <option value="tech">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Common Fields */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                  placeholder="example@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-lblue sm:text-sm"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-ameth px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lblue"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-white">
            Already have an account?{' '}
            <Link to="/signin" className="font-semibold text-ameth hover:text-lblue">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;