import axios from 'axios';
import React from 'react'
import Movie from './Movie';

export const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = React.useState([]);

    

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    

    const cards = movies.map((movie) => {
        return(
            <Movie  movie={movie}/>
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