import React from 'react'
import axios from 'axios'
import { useNavigate, useParams,Link } from 'react-router-dom'

const SingleProduct = () => {
    const {id }= useParams();
    const [role,setRole]=React.useState('');
    const[product,setProduct] =  React.useState({})
    const navigate = useNavigate();
    React.useEffect(()=>{
      axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          console.log('singleproduct');
          setRole(res.data.role);
          return;
          // navigate('/product');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
    });
    React.useEffect(()=>{
        axios.get('http://localhost:3305/product/'+id)
        .then(res=>{
          // console.log(res.data[0]);
          setProduct(res.data[0])
        })
        .catch(err=>console.log(err))
      },[id])
      function getFullDateAndTimeUTC() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
        const fullDateAndTimeUTC = currentDate.toLocaleDateString(undefined, options);
        return fullDateAndTimeUTC;
      }
      
      const fullDateAndTimeUTC = getFullDateAndTimeUTC();
      const oid = Date.now();
      const checkOut = (e)=>{
        e.preventDefault();
        const value = {
          oid: oid,
          pid :product.pid,
          time: fullDateAndTimeUTC,
          details: product.pname+" price "+product.price,
          status:'placed'
        }
          axios.post('http://localhost:3305/order',value)
              .then(res=>{
                  navigate(`/checkout/${oid}`);
              })
              .catch(err=>console.log(err));
        
      }
  return (
    <div className='App'>
        <div className='sec container'>
          <div className='App'>
            <h3>{product.pname}</h3>
          </div>
          <img className='rounded mx-auto p-2 w-50 d-block img-fluid' src={product.image} alt={product.pname}></img>
          <div className='App'>
            <h5>{product.description}</h5>
          </div>
          <div className='App row'>
            <div className='col'></div>
              {role===0&&<div className='col'><Link
              onClick={checkOut}
               className='colorOne fw-bold btn btn-success border-0'>Checkout</Link></div>}
            <div className='col text-dark fw-bolder'>{product.price} ৳</div>
            <div className='col'><Link to='/products' className='colorTwo fw-bold btn btn-primary border-0'>See other product</Link></div>
            <div className='col'></div>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct;