import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const Orders = () => {
  const [role,setRole] = React.useState('');
  const [orders,setOrders] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(()=>{
    axios.get('http://localhost:3305/orders')
    .then(res=>setOrders(res.data))
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
    return (
      <React.Fragment>
        <div className='container sec App bodi'>
          {role===0&&<div className='row'>
            <h2>Payment completed</h2>
            <h3>You will get your product in 3-5 days</h3>
          </div>}
          {role===1&&<div><h1>All Orders</h1></div>}
          <br/><br/><br/>
          {role===1&&<div className='row'>
                  <div className='col'>
                    <h3>OrderID</h3>
                    </div>
                    <div className='col'>
                    <h3>Details</h3>
                    </div>
                    <div className='col'>
                    <h3>ProductID</h3>
                    </div>
                    <div className='col'>
                    <h3>Time of order</h3>
                    </div>
                    <div className='col'>
                    <h3>Details</h3>
                    </div>
                    <div className='col'>
                    <h3>Paid</h3>
                    </div>
                    <div className='col'>
                    <h3>Transaction ID</h3>
                    </div>
                </div>}
                <br/><br/><br/>
            {role===1&&<span>{orders.map((order)=>{            
              return(
                <div className='row'>
                  <div className='col'>
                    <h5>{order.oid}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.details}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.pid}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.time}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.amount}</h5>
                  </div>
                  <div className='col'>
                    <h5>{order.trxnid}</h5>
                  </div>
                </div>
              )
            })}</span>}
           
        </div>

      </React.Fragment>
    )
  }
  