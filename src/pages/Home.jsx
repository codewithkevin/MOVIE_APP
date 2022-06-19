import React from 'react'
import Main from '../components/Main' 
import Row from '../components/Row';
import request from '../Request';

export const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Top rated' fetchURL={request.requestHorror}/>
        <Row title='Up Coming' fetchURL={request.requestComedy}/>
        <Row title='Up Coming' fetchURL={request.requestAction}/>
        <Row title='Up Coming' fetchURL={request.requestNowPlaying}/>
    </>
  )
}

export default Home;
