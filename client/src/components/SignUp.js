import React from 'react';
import {  Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
    const [value,setValue] = React.useState({
        name: '',
        email: '',
        contact: '',
        password: ''
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
        if(value.name&&value.email&&value.password&&value.contact){
            axios.post('http://localhost:3305/signup',value)
                .then(res=>{
                    navigate('/login');
                })
                .catch(err=>console.log(err));
        }
    }


  return (
    <React.Fragment>
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-5 rounded-4'>
            <h3 className='text-center fw-bolder'>Sign Up</h3>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='name'>Name</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='name' 
                               type='name' 
                               placeholder='Enter Your Name' 
                               onChange={handleInput}
                               required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='email'>Email</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='email' 
                               type='email' 
                               placeholder='Enter Email' 
                               onChange={handleInput}
                               required
                        />
                    </div>
                    <div>
                        <label className='m-2 d-block fw-bolder' htmlFor='contact'>Contact</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='contact' 
                               type='contact' 
                               placeholder='Enter your contact No.' 
                               onChange={handleInput}
                               required
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='m-2 d-block fw-bolder' htmlFor='password'>Password</label>
                        <input 
                               className='m-2 d-block form-control rounded-4 border-3' 
                               name='password' 
                               type='password' 
                               placeholder='Enter Password' 
                               onChange={handleInput}
                               required
                        />
                    </div>
                    <button type='submit' className='m-2 d-block fw-bolder form-control btn btn-secondary colorOne rounded-4 border-0'>Sign Up</button>  
                    <div className='m-2 d-block fw-bolder'>Already have an account?</div>
                    <Link to='/login' className='m-2 d-block fw-bolder form-control btn btn-secondary colorTwo rounded-4 border-0'>Login</Link>  
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SignUp;