import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export const Profile = () => {
  const [user,setUser] = React.useState([]);
  const [name,setName] = React.useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setName(res.data.user);
          console.log(res.data.user);
          console.log('Profile');
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
  React.useEffect(()=>{
    axios.post('http://localhost:3305/profile')
    .then(res=>{
      setUser(res.data[0])
    })
    .catch(err=>console.log(err))
  },[])
  console.log(user.uid);
    return (
      <React.Fragment>
        <div className='App sec container bodi'><h3>Welcome {name}</h3><br/><br/>
        <div className='row'>
          <div className='col'>
            <h5>
              <b>EMAIL</b>
            </h5>
          </div>
          <div className='col'>
            <h5>
              <b>contact</b>
            </h5>
          </div>
          <div className='col'>
            <h5>
              <b>ID</b>
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h5>
              {user.uemail}
            </h5>
          </div>
          <div className='col'>
            <h5>
              {user.ucontact}
            </h5>
          </div>
          <div className='col'>
            <h5>
              {user.uid}
            </h5>
          </div>
        </div>
        </div>
        
      </React.Fragment>
    )
  }