
import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white px-4 py-24">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Welcome to BookStore! Your favorite place to discover,
          explore and enjoy amazing books.
        </p>

        {/* About */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">
            Who We Are
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-7">
            BookStore is an online platform where book lovers
            can discover and explore different types of books.
            Our goal is to make reading easy and accessible
            for everyone.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl shadow-md border dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
            <h2 className="text-xl font-bold mb-3 text-pink-500">
              Our Mission
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-7">
              Our mission is to provide quality books and
              create a better reading experience for everyone.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md border dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
            <h2 className="text-xl font-bold mb-3 text-pink-500">
              Our Vision
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-7">
              Our vision is to become a trusted online
              bookstore for readers around the world.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✓ Easy online book browsing</li>
            <li>✓ Different categories of books</li>
            <li>✓ User-friendly website</li>
            <li>✓ Better reading experience</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About
