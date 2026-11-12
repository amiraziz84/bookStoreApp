
import React, { useEffect } from 'react'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { email: "" },
    })
  
    const onSubmit = (data) => console.log(data)

  useEffect(() => {
    document.getElementById("signup_modal")?.showModal()
  }, [])

  return (
    <>
      <div>
        <dialog id="signup_modal" className="modal bg-white dark:bg-slate-900">

          <div className="modal-box relative bg-white text-black dark:bg-slate-800 dark:text-white">

            {/* Close Button */}
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700">
                ✕
              </button>
            

            <h3 className="font-bold text-lg">Signup</h3>

            <div className='mt-4 space-y-2'>
              <span>Full Name</span>
              <br />
              <input type="text" placeholder='Enter your fullname'
                className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-700 dark:text-white dark:border-gray-500'
                {...register("fullname", { required: true })} />
                <br />
                {errors.fullname && <span className='text-sm text-red-500' >this field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="Email" placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-700 dark:text-white dark:border-gray-500'
                {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500' >this field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="Email" placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black dark:bg-slate-700 dark:text-white dark:border-gray-500'
                {...register("password", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500' >this field is required</span>}

            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                signup
              </button>

              <p>Have account?
                <span className='underline text-blue-500 cursor-pointer'
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  login
                </span>

                <Login />
              </p>
            </div>
            </form>

          </div>
        </dialog>
      </div>
    </>
  )
}

export default Signup
