import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

export const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  }

    
      
  return (
    <div className='flex items-center justify-between p-4
    z-{100} w-full bg-gray-600 sticky'>
        <Link to='/'>
          <h1 className='text-white-600 text-4xl 
          font-bold cursor-pointer'>MOVIE PACK</h1>
        </Link>

        {user?.email ? 
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Account</button>
          </Link>
    
          
            <button onClick={handleLogout} className='bg-blue-600 px-6 py-2
            rounded cursor-pointer text-white'>Log Out</button>
                
        </div>
        :  
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
    
          <Link to='/signup'>
            <button className='bg-blue-600 px-6 py-2
            rounded cursor-pointer text-white'>Sign Up</button>
          </Link>       
        </div>}
        
        
    </div>
  )
}

export default Navbar;