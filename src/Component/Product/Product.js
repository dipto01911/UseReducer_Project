// @flow strict

import * as React from 'react';
import { useState } from 'react';
import './Product.css';
function Product(props) {
    const pt=props.pt;
    const[Password,setpassword]=useState();
    const Show=()=>{
  const newpassword=pt.password;
  setpassword(newpassword);

    }
    return (
        <div className='product'>
            <h3>Id : {pt.Id}</h3>
            <p>Name : {pt.name}</p>
            <p>Father's Name: {pt.father}</p>
            <p>Password: {Password}</p>
            <button onClick={Show}>show Password</button>
            
        </div>
    );
};

export default Product;