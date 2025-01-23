import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link } from "react-router-dom";
import "../style/Admin/AdminUsers.css"

// const token = localStorage.getItem("token");
const AdminUsers = () => {
  const [udata, setUdata]= useState([""]);
  const {authorizationToken} = useAuth();
  
  const getAllUsersData = async()=>{
    try {
        await axios.get("http://192.168.1.15:5000/api/admin/users",{headers:{Authorization:authorizationToken},})
       .then((response)=>{setUdata(response.data)})
        
                       
    } catch (error) {
      console.log(error);
      
    }
  };

  // //delete user ####################################################3
  const deleteUser = async (id)=>{
    try {
      
            await axios.delete(`http://192.168.1.15:5000/api/admin/users/delete/${id}`,{headers:{Authorization:authorizationToken},})
            .then((res)=>{console.log(res.data)})
            getAllUsersData();
      
    } catch (error) {
      console.log(error);
      
    }
    
  };



  useEffect(()=>{
    getAllUsersData();
  },[]);
  
  return (
    <>
    
    <section className='admin-users-section'>
    <h1>Admin Users Data</h1>
      <div className="container">
        
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {udata.map((ele,index)=>{
      return <tr key={index}>
             <td>{index + 1}</td>
             <td>{ele.name}</td>
             <td>{ele.email}</td>
             <td>{ele.phone}</td>
             <td><Link to= {`/admin/users/${ele._id}`}>Edit</Link></td>
             <td><button onClick={()=>deleteUser(ele._id)}>Delete</button></td>
      </tr>
    })}
          </tbody>
        </table>
    
    </div>
    </section>
    </>
  );
}

export default AdminUsers
