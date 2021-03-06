import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = (props) => {
  const [like] = React.useState(false);
  const image = `https://image.tmdb.org/t/p/w500/${props.movie?.backdrop_path}`;
  const title = props.movie?.title || props.movie?.name;
  
  return (
    
    
      <div onClick={props.Change} className='w-[160px] sm:w-[200px] lg:w-[180px] inline-block cursor-pointer relative p-2'>

          
            <img className='w-full h-auto' src={image} alt={title}/>
          
        
          <div className="absolute top-0 left-0 w-full h-full 
          hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              <button className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{title}</button>
              
              <p   
              className="absolute top-4 left-4 text-gray-400">
                  {like ? <FaHeart className='text-red-500'/> : <FaRegHeart className='text-gray-500'/>  }
              </p>
          </div>
      </div>
    
     
  )
}

export default Movie;