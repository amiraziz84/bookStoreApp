
import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white flex justify-center items-center px-4">

      <div className="w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-5">
          Contact Us
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white text-black dark:bg-slate-800 dark:text-white dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full bg-white text-black dark:bg-slate-800 dark:text-white dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              placeholder="Type your message"
              className="textarea textarea-bordered w-full h-24 bg-white text-black dark:bg-slate-800 dark:text-white dark:border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-pink-500 hover:bg-pink-600 text-white border-none"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact
