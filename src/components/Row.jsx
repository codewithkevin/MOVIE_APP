import axios from 'axios';
import React from 'react'

export const Row = (props) => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(props.fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [props.fetchURL]);


  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                 {movies.map((item,id) => {
                    <di className='w-[160px> sm:w-[240px] lg:w-[180px] inline-block cursor-pointer relative p-2'>
                        <img src='' alt={item.title} />
                        
                        
                    </di>
                 })}
            </div>
        </div>
    </>

  )
}

export default Row;