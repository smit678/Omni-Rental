
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import axios from "axios";
import { toast } from 'react-toastify';
import  "../style/Register.css";


const Register = () => {
  const [user, setUser]= useState({
    name:"",
    email:"",
    phone:"",
    password:"",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

// handle
const handleInput=(e)=>{
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]:value,
  });
};

//form submition
const handleSubmit = async (e)=>{
  e.preventDefault();  //to stope reloading form
  console.log(user);
  
  
  
  try {
    const response = await axios.post(`http://192.168.1.15:5000/api/register`,user);
    
    // const Data = await response;
     console.log(response);
    if(response.data) {
        //token store
      storeTokenInLS(response.data.token);

      setUser({name:"",email:"",phone:"", password:""});
      toast.success(`hello ${user.name},register successful`);
      navigate("/");
    }

    
     
  } catch (e) {
    toast.error(e.response.data.extraDetails ?e.response.data.extraDetails:e);
    }
                    
    
            //  await axios.post(`http://192.168.1.15:5000/api/register`, user)
            //          .then((res)=>{console.log(res);
                     
            //           if(res.data.value) {
            //             console.log(res.data);
                        
                        
            //             //token store
            //             storeTokenInLS(res.data.token);
                        
            //             setUser({name:"",email:"",phone:"", password:""})
            //             toast.success(`hello ${user.name},register successful`)
            //             navigate("/");
            //           }  
            //           return res.data.value;
            //         })
                     
            //          .catch((error)=>{
            //           // next(error);
            //           toast.error("invalid Data")               
            //          });
                                      
}; 
  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="reg-img img">
              <img src="./bmw.jpg" alt="" width="600" height="400"/>
            </div>
            {/* registration-form */}
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Register-form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">name</label>
                  <input 
                      type="taxt" 
                      name='name'  
                      placeholder="name" 
                      id='name'
                      required
                      autoComplete="off"
                      pattern="[A-Za-z]{}"
                      value={user.name}
                      onChange={handleInput}
                   />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input 
                      type="email" 
                      name='email'  
                      placeholder="email" 
                      id='email'
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                   />
                </div>
                
                <div>
                  <label htmlFor="phone">phone</label>
                  <input 
                      type="number" 
                      name='phone'  
                      placeholder="phone" 
                      id='phone'
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                   />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input 
                      type="password" 
                      name='password'  
                      placeholder="password" 
                      id='password'
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                   />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register
