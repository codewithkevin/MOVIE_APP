import React from 'react'

const List = (props) => {

    const image = `https://image.tmdb.org/t/p/w500/${props.movie?.backdrop_path}`;
    const title = props.movie?.title || props.movie?.name;
    
  return (
        <div className="w-full text-white">
            <h1>
                {title}
            </h1>
            
        </div>
  )
}

export default List;