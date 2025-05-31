import React from 'react';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import Info from './Info';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const Home = () => {
  // const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          console.log('Home');
          return;
          // navigate('/products');
        }
        // else{
        //   navigate('/login');
        // }
      })
      .catch(err=>console.log(err));
  });
    return (
      <React.Fragment>
        <HomeCarousel/>
        <Services/>
        <Info/>
      </React.Fragment>
    )
  }