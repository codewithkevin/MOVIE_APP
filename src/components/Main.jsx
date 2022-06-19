import axios from 'axios'
import React from 'react'
import request from '../Request'

export const Main = () => {

  const [movies, setMovies] = React.useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    React.useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    const truncatedString = (str, num) => { 
        if(str?.length > num) {
            return str.substring(0, num) + '...'
        } else {
            return str
        }
    }

  return (
    <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <img className='w-full h-full object-cover' 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
            alt={movie?.title} />
            <div className='w-full top-[20%] p-4 ml-5 md:p-8 absolute'>
                    <h1 className="text-3xl ml-5 mb-2 md:text-5xl">{movie?.title}</h1>
                <div>
                    <button className="border bg-gray-300 text-balck border-gray-300 py-2 px-5 ml-4">
                        Play
                    </button>
                    <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-white hover:text-black">
                        Watch Later
                    </button>
                </div>
                <p className="ml-5 py-5 text-gray-300 text-sm">
                    Release Date: {movie?.release_date}
                </p>
                <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-300">
                    {truncatedString(movie?.overview, 100)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main;