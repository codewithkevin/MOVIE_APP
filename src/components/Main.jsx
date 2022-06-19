import axios from 'axios'
import React from 'react'
import request from '../Request'

export const Main = () => {

  const [movies, setMovies] = React.useState([])

  

    React.useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    console.log(movies)

  return (
    <div>
        
    </div>
  )
}

export default Main;