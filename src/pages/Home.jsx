import React from 'react'
import Main from '../components/Main' 
import Row from '../components/Row';
import request from '../Request';

export const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Horro' fetchURL={request.requestHorror}/>
        <Row title='Comedy' fetchURL={request.requestComedy}/>
        <Row title='Action' fetchURL={request.requestAction}/>
        <Row title='Now Playing' fetchURL={request.requestNowPlaying}/>
    </>
  )
}

export default Home;
