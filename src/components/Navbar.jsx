import React from 'react'
import { Link } from 'react-router-dom'
import {userAuth} from '../context/AuthContext'

export const Navbar = () => {
  const defaultOption = 
    <div>
      <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
      </Link>

      <Link to='/signup'>
        <button className='bg-red-600 px-6 py-2
        rounded cursor-pointer text-white'>Sign Up</button>
      </Link>       
    </div>

    const logoutOption = 
    <div>
      <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
      </Link>

      <Link to='/signup'>
        <button className='bg-red-600 px-6 py-2
        rounded cursor-pointer text-white'>Sign Up</button>
      </Link>       
    </div>

    const {user, logOut} = userAuth();

    const handleLogout = async () => {
      try {
        await logOut()
      } catch (e) {
        console.log(e);
      }
    }
      
  return (
    <div className='flex items-center justify-between p-4
    z-{100} w-full sticky'>
        <Link to='/'>
          <h1 className='text-red-600 text-4xl 
          font-bold cursor-pointer'>TWIFLEX</h1>
        </Link>

        {user.email ? logoutOption : defaultOption}
        
        
    </div>
  )
}

export default Navbar;