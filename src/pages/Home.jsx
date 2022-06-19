import React from 'react'
import Main from '../components/Main' 
import Row from '../components/Row';
import request from '../Request';

export const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='2' title='Comedy' fetchURL={request.requestComedy}/>
        <Row rowID='1' title='Horro' fetchURL={request.requestHorror}/>
        <Row rowID='3' title='Action' fetchURL={request.requestAction}/>
        <Row rowID='4' title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row rowID='5' title='Now Playing' fetchURL={request.requestNowPlaying}/>
    </>
  )
}

export default Home;
