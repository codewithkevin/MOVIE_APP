import axios from 'axios';
import React from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

export const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = React.useState([]);

    

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    

    const cards = movies.map((movie, id) => {
        return(
            <Movie key={id} movie={movie}/>
        )
    }
    )

    const sliderleft = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollleft = slider.scrollleft + 500;
    }

    const sliderright = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollleft = slider.scrollleft + 500;
    }
    

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft
            onClick={sliderleft}
             className="bg-white rounded-full left-0
            abosulte opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"/>
            <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smoth scrollbar-hide relative">
                {cards}
            </div>
            <MdChevronRight 
            onClick={sliderright}
            className="bg-white rounded-full
            abosulte opacity-50 hover:opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block" />
        </div>
    </>

  )
}

export default Row;