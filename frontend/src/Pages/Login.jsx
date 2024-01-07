import React,{useState} from "react";
import "./login.css";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

export const Login = () => {
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.authReducer)

  const[formdata,setFormdata]=useState({})
  const handleChange=(e)=>{
    const {type,value}=e.target
    setFormdata({...formdata,[type]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(dispatch,formdata)
  }

 if(state.isAuth && state.token){
  return <Navigate to='/'/>
 }

  return (
    <div id="login-page">
      <div className="card">
        <h4 className="title">LogIn</h4>
        <form onSubmit={handleSubmit}>
          <div className="field">
           
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
