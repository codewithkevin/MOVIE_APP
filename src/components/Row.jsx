import axios from 'axios';
import React from 'react'

export const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    

    const cards = movies.map((movie) => {
        return(
            <div className='w-[160px] sm:w-[200px] lg:w-[180px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
                    <div className="absolute top-0 left-0 w-full h-full 
                    hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                        <p>{movie?.title}</p>
                    </div>
            </div>
        )
    }
    )

    

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                {cards}
            </div>
        </div>
    </>

  )
}

export default Row;