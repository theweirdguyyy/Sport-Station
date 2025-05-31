import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Error } from './components/Error';
import Payment from './components/Payment';
import {Products} from './components/Products';
import CheckOut from './components/CheckOut';
import {Pricing} from './components/Pricing';
import {Blog} from './components/Blog';
import {Orders} from './components/Orders';
import SingleProduct from './components/SingleProduct';
import { Logout } from './components/Logout';
import { Login } from './components/Login';
import {SignUp} from './components/SignUp';
import AddProducts from './components/AddProducts';
import Footer from './components/Footer';
import React from 'react';
import ResponsiveAppBar from './components/AppBar';

const App = () => {
  return (
    <React.Fragment>
      
      <ResponsiveAppBar/>
      
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/signup" element = {<SignUp/>}></Route>
        <Route path="/products" element = {<Products/>}></Route>
        <Route path="/product/:id" element = {<SingleProduct/>}></Route>
        <Route path="/pricing" element = {<Pricing/>}></Route>
        <Route path="/addproduct" element = {<AddProducts/>}></Route>
        <Route path="/blog" element = {<Blog/>}></Route>
        <Route path="/payment" element = {<Payment/>}></Route>
        <Route path="/profile" element = {<Profile/>}></Route>
        <Route path='/checkout/:id' element = {<CheckOut/>}></Route>
        <Route path="/orders" element = {<Orders/>}></Route>
        <Route path="/logout" element = {<Logout/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>  
    </React.Fragment>
  );
}

export default App;
