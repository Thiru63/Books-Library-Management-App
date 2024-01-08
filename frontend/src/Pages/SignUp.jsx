import React,{useState} from "react";
import "./login.css";
import { signup } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

export const SignUp = () => {
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.authReducer)

  const[formdata,setFormdata]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    signup(dispatch,formdata)
  }

 if(state.isAuth && state.token){
  return <Navigate to='/'/>
 }

  return (
    <div id="login-page">
      <div className="card">
        <h4 className="title">SignUp</h4>
        <form onSubmit={handleSubmit}>
        <div className="field">
           
           <input
             id="name"
             name="name"
             placeholder="Name"
             className="input-field"
             type="text"
             onChange={handleChange}
           />
         </div>
         <div className="field">
           
           <input
             id="logemail"
             name="email"
             placeholder="Email"
             className="input-field"
             type="email"
             onChange={handleChange}
           />
         </div>
          <div className="field">
           
            <input
              id="phonenumber"
              name="phone_number"
              placeholder="Phone Number"
              className="input-field"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            
            <input
              id="logpass"
              name="password"
              placeholder="Password"
              className="input-field"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
