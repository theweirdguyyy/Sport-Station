import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddProducts = () => {
  const [role,setRole] = React.useState('');
  const [value,setValue] = React.useState({
    name: '',
    description: '',
    image: '',
    quant: '',
    price: ''
  });
  const navigate = useNavigate();
  const handleInput = (e) =>{
    setValue(prev=>({
        ...prev,
        [e.target.name]:[e.target.value]
  }));
}
const handleSubmit = (e) =>{
  e.preventDefault();
  setValue(value);
  if(value.name&&value.description&&value.image){
    axios.post('http://localhost:3305/addproduct',value)
    .then(res=>{
      navigate('/products');
    })
    .catch(err=>console.log(err));
  }
}

axios.defaults.withCredentials = true;
React.useEffect(()=>{
  axios.get('http://localhost:3305')
    .then(res=>{
      if(res.data.valid&&res.data.role){
        setRole(res.data.role);
        console.log('====================================');
        console.log(role);
        console.log('====================================');
        
        return;
        // navigate('/products');
      }
      else{
        navigate('/');
      }
    })
    .catch(err=>console.log(err));
});
return (
  <div className='sec d-flex justify-content-center align-items-center bg-secondary'>
            <div className='bg-white p-5 rounded-4 w-50'>
            <h3 className='text-center fw-bolder'>Add a Product</h3>
                <form action='' 
                onSubmit={handleSubmit}
                >
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='name'>Product Name</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='name' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='description'>Add Description</label>
                        <input 
                          className='m-2 d-block form-control rounded-4 border-3' 
                          name='description' 
                          type='text' 
                          onChange={handleInput}
                          required
                        />
                    </div>
                    <div>
                      <label className='m-2 d-block fw-bolder' htmlFor='image'>Image Link</label>
                      <input 
                        className='m-2 d-block form-control rounded-4 border-3' 
                        name='image' 
                        type='text'
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='m-2 fw-bolder' htmlFor='quant'>Quantity</label>
                      <input 
                        className='m-2 d-inline rounded-3 border-2 w-25' 
                        name='quant' 
                        type='number'
                        onChange={handleInput}
                        required
                      /> 
                      <label className='m-2 fw-bolder' htmlFor='price'>Price</label>
                      <input 
                        className='m-2 d-inline rounded-3 border-2' 
                        name='price' 
                        type='number'
                        onChange={handleInput}
                        required
                      /> 
                    </div>
                    <div className='mb-3'>
                    </div>
                    
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0'>Add Product</button>  
                </form>
            </div>
        </div>
  )
}

export default AddProducts