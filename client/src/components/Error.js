import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React from 'react';
import { Link } from 'react-router-dom';
import  'bootstrap';
import NF from '../resources/404-page-not-found-illustration-2048x1462-azn7c8sp.png';

export const Error = () => {
  return (
    <React.Fragment>
      <div className='container bodi'>
      <div className='error'>
      <img className='w-50' src={NF} alt='404-page-not-found-illustration-2048x1462-azn7c8sp.png'></img>
      <div className='text-danger'>Ooops! The page you are looking for does not exist!  <SentimentVeryDissatisfiedIcon/></div>
      <button className='btn btn-secondary colorThree border-0' >
        <Link to='/' className='lnk'>
          Back to Home
        </Link>
        </button>
        </div>
      </div>
    </React.Fragment>
  )
}
