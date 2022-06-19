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
    <div className="w-full h-{550px} text-white">
         <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
         </div>
    </div>
  )
}

export default Main;