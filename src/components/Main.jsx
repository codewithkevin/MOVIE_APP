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

    console.log(movie)

  return (
    <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <img className='w-full h-full object-cover' 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
            alt={movie?.title} />
            <div className='aboslute w-full top- p-4 md:p-8'>
                    <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
                <div>
                    <button className="border bg-gray-300 text-balck border-gray-300 py-2 px-5 ml-4">
                        Play
                    </button>
                    <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                        Watch Later
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;