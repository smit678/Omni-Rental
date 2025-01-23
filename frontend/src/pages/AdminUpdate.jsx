import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import axios from 'axios';
 import { toast } from 'react-toastify';

const AdminUpdate = () => {

    const params = useParams();
    const [Data, setData]= useState({
            name:"",
            email:"",
            phone:"",
        });
         //console.log(params);
        const { authorizationToken } = useAuth();


         // //update  user ####################################################3
  const getSingleUserData = async ()=>{
    try {
      
            await axios.get(`http://192.168.1.15:5000/api/admin/users/${params.id}`,{headers:{Authorization:authorizationToken},})
            .then((res)=>{setData(res.data)
             // console.log(Data)
                         }
              
          )
            // getAllUsersData();
            //console.log(Data)
          
    } catch (error) {
      console.log(error);
      }
    };


    useEffect(()=>{
        getSingleUserData();
    },[]);
    
    
const handleInput = (e)=>{
 let name = e.target.name;
 let value = e.target.value;

 setData({
    ...Data,
    [name] : value,
});
};



const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {
       
        await axios.patch(`http://192.168.1.15:5000/api/admin/users/update/${params.id}`,Data,{headers:{Authorization:authorizationToken},})
        .then((res)=>{console.log(res)})
        
         toast.success("Updated successfuly")
    } catch (error) {
        console.log(error);
        
    }
};

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            {/* registration-form */}
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Update user data</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">name</label>
                  <input 
                      type="text" 
                      name='name'  
                      placeholder="name" 
                      id='name'
                      required
                      autoComplete="off"
                      value={Data.name}
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
                      value={Data.email}
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
                      value={Data.phone}
                      onChange={handleInput}
                   />
                </div>

                {/* <div>
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
                </div> */}
                <br />
                <button type='submit' className='btn btn-submit'>Update</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default AdminUpdate
