import axios from 'axios';
import React from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import List from './List';
import {useNavigate} from 'react-router-dom';

export const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = React.useState([]);
    const navigate = useNavigate();

    

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    function Change(){
        navigate('/details');
    }

    const cards = movies.map((movie, id) => {

        return(
            <Movie Change={Change} key={id} movie={movie}/>
        )
    }
    )
    const list = movies.map((movie, id) => {   
        return(
            <List key={id} movie={movie}/>
        )
    })
    console.log(list);
    

    const sliderleft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const sliderright = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
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