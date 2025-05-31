import React from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios'

const CheckOut = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  var arr = [];
  const [user,setUser] = React.useState([]);
  const [name,setName] = React.useState('');
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
      setUser(res.data[0]);
    })
    .catch(err=>console.log(err))
  },[])
  const handleInput = (e) =>{
    setValue(prev=>({
      ...prev,
      [e.target.name]:[e.target.value]
    }))};
    
    console.log(user.uid);
    // const sx = dat.uid;
    // console.log(sx);
    // console.log(arr);
    // console.log(arr.uid);

    
    const [value,setValue] = React.useState({
      oid: id,
      id: user.uid,
      city: '',
      address: '',
      amount: 0
    });
    console.log(value);
  const [role,setRole] = React.useState('');
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) =>{
    e.preventDefault();
    setValue(value);
    if(value.city&&value.address&&value.amount){
      axios.post('http://localhost:3305/shipping',value)
      .then(res=>{
        navigate('/orders');
      })
      .catch(err=>console.log(err));
    }
  }
  return (
    <React.Fragment>
                    {/* {id} */}
                    <div className='sec d-flex justify-content-center align-items-center bg-secondary'>
            <div className='bg-white p-5 rounded-4 w-50'>
            <h3 className='text-center fw-bolder'>Checkout</h3>
                <form action='' 
                onSubmit={handleSubmit}
                >
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='city'>City</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='city' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='address'>Address</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='address' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div className='mb-3'>
                       
                      <label className='m-2 fw-bolder' htmlFor='amount'>Amount</label>
                      <input 
                        className='m-2 d-inline rounded-3 border-2' 
                        name='amount' 
                        type='number'
                        min={100}
                        onChange={handleInput}
                        required
                      /> 
                    </div>
                    <div className='mb-3'>
                    </div>
                    
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0'>Pay and Complete Order</button>  
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CheckOut;