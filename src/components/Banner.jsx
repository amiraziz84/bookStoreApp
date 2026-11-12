import React from 'react'
import Banner1 from "../Data/banner1.png";



function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-4 flex flex-col md:flex-row my-10'>
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold capitalize'>hello, welcomes here to learn something <span className='text-pink-500'>new everyday !!!</span></h1>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel optio natus reiciendis minus odio soluta rerum quae repellat ea nesciunt, eligendi placeat officia ipsum voluptas corporis magni? Esse, exercitationem?</p>
        <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" id="user-email" name="email" autoComplete="off" placeholder="Email" required/>
    </label>
        </div>
        <button className="btn btn-secondary mt-6">Secondary</button>
        
        </div>
        <div className='w-full md:w-1/2 order-1'>
         <img src={Banner1} alt="Book" className="w-130 h-150" /> 
        </div>
    </div>
    </>
  )
}

export default Banner
