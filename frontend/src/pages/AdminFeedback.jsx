import { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import axios from 'axios';


const AdminFeedback = () => {

    const [feedback, setFeedback] = useState([""]);
    const {authorizationToken} = useAuth();
    
    const getAllFeedback = async()=>{
      try {
          await axios.get("http://192.168.1.15:5000/api/admin/feedbacks",{headers:{Authorization:authorizationToken},})
         .then((responce)=>{setFeedback(responce.data)})
          
          
                         
      } catch (error) {
        console.log(error);
        
      }
    }

      // //delete message ####################################################3
  const deleteMessage = async (id)=>{
    try {
      
            await axios.delete(`http://192.168.1.15:5000/api/admin/feedbacks/delete/${id}`,{headers:{Authorization:authorizationToken},})
            .then((res)=>{console.log(res.data)})
            getAllFeedback();
      
    } catch (error) {
      console.log(error);
      
    }
    
  };


    useEffect(()=>{
      getAllFeedback();
    },[]);
    
    return (
        <>
        <section className='admin-users-section'>
        <h1>Admin Feedback Data</h1>
          <div className="container">
            
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              
              {feedback.map((ele, index)=>{
          return <tr key={index}>
                 <td>{index + 1}</td>
                 <td>{ele.name}</td>
                 <td>{ele.email}</td>
                 <td className='message'>{ele.message}</td>
                 <td><button onClick={()=>deleteMessage(ele._id)}>Delete</button></td>
          </tr>
        })}
              </tbody>
            </table>
        
        </div>
        </section>
        </>
      );
        
}

export default AdminFeedback ;
