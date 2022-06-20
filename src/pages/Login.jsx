import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const imagesrc = "https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/a891cee3-5089-4ef1-bd7b-a6b2b3ee0395/GH-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg"

  return (
    <div className="w-full h-screen">
      <img  src={imagesrc} className="absolute w-full h-full hidden sm:block" alt="" />
         <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>

         </div>
         <div className='w-full fixed px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[400px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form className='w-full flex flex-col py-4'>
                      <input type="email" name="email" placeholder="Email" className='border-2  bg-gray-900 rounded-lg px-4 py-2 text-white' /> 
                      <input type="password" name="password" placeholder="Password" className='border-2  bg-gray-900 rounded-lg px-4 py-2 mt-4 text-white'autoComplete='current-password' />
                      <button className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded -lg mt-4'>Sign Up</button>
                      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
                        <p>
                          <input className='mr-2' type="checkbox" /> Remeber Me
                        </p>
                        <p>
                          <Link to='/'>Need Help?</Link>
                        </p>
                      </div>
                      <p className="py-8">
                          <span className='text-gray-600'>Already have an account?</span>{' '}
                          <Link to='/login'>Sign In</Link>
                      </p>
                    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Login;