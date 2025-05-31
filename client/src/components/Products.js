import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Product  from './Product';
import { useStateValue } from '../context/StateProvider';
import { useCart } from '../context/cart_context';

export const Products = () => {
  // const [dstate,dispatch] = useStateValue();
  // const [cart,setCart] = useCart();
  const navigate = useNavigate();
  const [role,setRole] = React.useState('');
  const[products,setProducts] =  React.useState([])
  React.useEffect(()=>{
    axios.get('http://localhost:3305/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setRole(res.data.role);
          console.log('Products');
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
//   const addtoCart = (e) =>{
//     dispatch({
//       type: "ADD_TO_CART",
//       item: {
//         pid: products.pid,
//         pname: products.pname,
//         description: products.description,
//         image: products.image,
//         price: products.price
//       },
//     })
// }
// console.log(products);

  return (
    <React.Fragment>
      <div className='bodi bg-secondary sec'>
        <div className='container'>
          <div className='row row-cols-3'>
            {/* {products.map((p)=>{
              return(
                <span>
                  
                <Product
                  pid={p.pid}
                  pname={p.pname}
                  description={p.description}
                  image={p.image}
                  price={p.price}
                  />
                <p>{cart.length}</p>
                  </span>
              )
            })}            */}
            {products.map((p)=>{
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
                pid :p.pid,
                time: fullDateAndTimeUTC,
                details: p.pname+" price "+p.price,
                status:'placed'
              }
                axios.post('http://localhost:3305/order',value)
                    .then(res=>{
                        navigate(`/checkout/${oid}`);
                    })
                    .catch(err=>console.log(err));
              
            }
            return (
            <div key={p.pid} className='col'>
                      <Card sx={{ width: 345 }}>
                        <CardMedia
                          component="img"
                          alt={p.pname}
                          height="300"
                          image={p.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{p.pname.slice(0,27)}</Typography>
                          <Typography variant="body2" color="text.secondary">{p.description.slice(0,99)}</Typography>
                        </CardContent>
                        <CardActions>
                          {role===0&&<Link className='btn colorOne btn-success fw-bold border-0' 
                          onClick={checkOut}
                           >Checkout</Link> }
                          <span className='mx-auto'>{p.price} ৳</span>
                          <Link className='btn colorTwo btn-primary fw-bold border-0' to={`/product/${p.pid}`}>Learn More</Link>
                        </CardActions>
                      </Card><br/><br/>
                    </div>)
              })}
          </div>
        </div>
      </div>  
    </React.Fragment>
  )
}
