// @flow strict

import * as React from 'react';
import { useReducer,useRef } from 'react';
import { initialize, reducer } from './FormManage';
import'./Form.css';
import Product from '../Product/Product';

function Form() {
    const[state,dispatch]=useReducer(reducer,initialize);
const name=useRef();
const father=useRef();
const password=useRef();
const handelSubmit=(event)=>{
    event.preventDefault();
   dispatch({type:'ADD_MEMBER',
      Id:state.person.length+1,
      name:name.current.value,
      father:father.current.value,
      password:password.current.value

   })
   console.log(state.person);
   name.current.value='';
   father.current.value='';
   password.current.value='';
   
}
    return (
        <div className='section'>
            <div className='section1'>
              <h2>Form Section</h2>
            <form onSubmit={handelSubmit} className='form'>
                <fieldset>
                    <legend>Enter Information</legend>
 <label>Name: <input type='text' placeholder='Enter name' ref={name} required/></label>
 <br/>
 <br/>
 <label>Father's Name: <input type='text' placeholder='Enter father name' ref={father} required/> </label>
            
 <br/>
 <br/>
 <label>Password: <input type='password' placeholder='Enter password' ref={password} required/> </label>
 <br/>
 <br/>
 <button className='btn' >Submit</button>
 </fieldset>
            </form>
        </div>
        <div className='section2'>
            <h2>Information Section</h2>
            {
                state.person.map(pt => <Product pt={pt}></Product>)
            }
        </div>
        </div>
    );
};

export default Form;