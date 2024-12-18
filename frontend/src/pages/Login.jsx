import React from 'react'
import "../style/Login.css";
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {

  const [user,setUser]= useState({
     email:"",
     password:"",
  });

const navigate = useNavigate()

const { storeTokenInLS } = useAuth();

//handle inputs
 const handleloginInput = (e)=>{
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name] : value,
  });
 };
 
 //form submition
const handleSubmit =async (e)=>{
  e.preventDefault();
  //console.log(user);

  try {
    const response = await axios.post(`http://localhost:5000/api/login`,user);
    if (response.status) {
      storeTokenInLS(response.data.token);
      setUser({email:"", password:""});
      toast.success(`login successful`);
      navigate("/");
    }
    console.log(response);
    
  } catch (e) {
    //console.log("login",e);
    toast.error(e.response.data.extraDetails ? e.response.data.extraDetails : e);
  }
                
//   await axios.post("http://localhost:5000/api/login", user)
//                  .then((res)=>{console.log("login success");
//                   if(res.status){
//                     storeTokenInLS(res.data.token);
//                     setUser({name:"",email:"",phone:"", password:""})
//                     toast.success(`hello,login successful`);
//                     navigate("/");
//                   } 
//                  })
//                  .catch((error)=>{console.log(error);
//                   toast.error("invalid credential")
//                  })
 }; 
  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className='reg-img img'>
            <img src="./bmw.jpg" alt="" width="600" height="400"/>
            </div>
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Login-form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                 <label htmlFor="email">email</label>
                   <input 
                        type="text" 
                        name='email' 
                        placeholder='Enter Email' 
                        id='email' 
                        required 
                        autoComplete='off' 
                        value={user.email} 
                        onChange={handleloginInput} 
                    />
                </div>

                <div>
                 <label htmlFor="password">password</label>
                   <input 
                        type="password" 
                        name='password' 
                        placeholder='password' 
                        id='password' 
                        required 
                        autoComplete='off' 
                        value={user.password} 
                        onChange={handleloginInput} 
                    />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login
