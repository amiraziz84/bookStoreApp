
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  })

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
     <div className="modal-box bg-white text-black dark:bg-slate-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700">✕</Link>
     
     

      {/* Email */}
      <h3 className="font-bold text-lg">Login</h3>

      <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="Email" placeholder='Enter your email'
         className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-700 dark:text-white dark:border-gray-500' 
         {...register("email", { required: true })} />
         <br />
         {errors.email && <span className='text-sm text-red-500' >this field is required</span>}
      </div>

      {/* Password */}
      <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text" placeholder='Enter your Password'
         className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-700 dark:text-white dark:border-gray-500' 
         {...register("password", { required: true })} />
         <br />
         {errors.password && <span className='text-sm text-red-500' >this field is required</span>}
      </div>

      {/* Button */}
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
            Login
        </button>

        <p>Not registered?{" "} 
        <Link to="/signup" className='underline text-blue-500 cursor-pointer'>signup</Link>{" "} </p>
     </div>
     </form>

     </div>
    </dialog>
    </div>
    </>
  )
}

export default Login
