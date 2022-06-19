import axios from 'axios';
import React from 'react'

export const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    console.log(movies)

    const cards = movies.map((movie) => {
        return(
            <div className='w-[160px> sm:w-[240px] lg:w-[180px] inline-block cursor-pointer relative p-2'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
                    
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