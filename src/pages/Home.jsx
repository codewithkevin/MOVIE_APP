import React from 'react'
import Main from '../components/Main' 
import Row from '../components/Row';
import request from '../Request';

export const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
    </>
  )
}

export default Home;
