import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useStateValue } from '../context/StateProvider';

const Product = ({pid,pname,description,image,price}) => {
  // const [state,dispatch] = useStateValue();
  const navigate = useNavigate();
  const [role,setRole] = React.useState('');
//   const[products,setProducts] =  React.useState([{
//     pid:"",
//     pname:"",
//     description:"",
//     image:"",
//     price:0
//   }])
//   React.useEffect(()=>{
//     axios.get('http://localhost:3305/ppp/products')
//     .then(res=>setProducts(res.data))
//     .catch(err=>console.log(err))
//   },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setRole(res.data.role);
          console.log('Product');
          return;
          // navigate('/products');
        }
        else{
          navigate('/login');
        }
      })
      .catch(err=>console.log(err));
  });
  // const addtoCart = (e) =>{
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     item: {
  //       pid: pid,
  //       pname: pname,
  //       description: description,
  //       image: image,
  //       price: price
  //     },
  //   })
// }
  return (
    // <React.Fragment>
    //   <div className='bg-secondary sec'>
    //     <div className='container'>
    //       <div className='row row-cols-3'>
    //         {products.map((p)=>{
    //         return (
            <div key={pid} className='col'>
                      <Card sx={{ width: 345 }}>
                        <CardMedia
                          component="img"
                          alt={pname}
                          height="300"
                          image={image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{pname.slice(0,27)}</Typography>
                          <Typography variant="body2" color="text.secondary">{description.slice(0,99)}</Typography>
                        </CardContent>
                        <CardActions>
                          {role===0&&<Button size="small" 
                          // onClick={addtoCart}
                           >Add to cart</Button> }
                            <span className='mx-auto'>{price} ৳</span>
                          <Link className='btn colorTwo btn-primary' to={`/product/${pid}`}>Learn More</Link>
                        </CardActions>
                      </Card><br/><br/>
                    </div>)
    //           })}
    //       </div>
    //     </div>
    //   </div>  
    // </React.Fragment>
//   )
}
export default Product;