import React from 'react'
import list from '../Data/list.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'


function Course() {
 
  
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-4  ' >
    <div className='mt-16 items-center justify-center text-center'>
      <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-pink-500'>Here! :)</span>
      </h1>
      <p className='mt-12'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nam, veniam magni molestias ullam fugit nostrum, commodi impedit minus, dolorem quo. Reprehenderit ullam nisi facere illo fugit eius tenetur!
      </p>
      <Link to={"/"}><button className="btn btn-secondary mt-6">Back</button></Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
    </div>
  )
}

export default Course

