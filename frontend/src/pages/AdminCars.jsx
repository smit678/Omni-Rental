import React, { useState , useEffect } from 'react'
import { useAuth } from '../store/auth';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import FormatPrice from '../../Helpers/FormatPrice';


const AdminCars = () => {

    const [cars , setCars] = useState([""]);
    const {authorizationToken} = useAuth();
    
    const getAllCarsData = async()=>{
        try {
            await axios.get("http://localhost:5000/api/admin/cars",{headers:{Authorization:authorizationToken},})
           .then((response)=>{setCars(response.data)})
            
                           
        } catch (error) {
          console.log(error);
          
        }
      };


      // //delete car ####################################################3
  const deleteCar = async (id)=>{
    try {
      
            await axios.delete(`http://localhost:5000/api/admin/cars/delete/${id}`,{headers:{Authorization:authorizationToken},})
            .then((res)=>{console.log(res.data)})
            getAllCarsData();
      
    } catch (error) {
      console.log(error);
      
    }
    
  };  


      useEffect(()=>{
        getAllCarsData();
      },[]);

  return (
    <main>
    <section className="section-cars">
      
      <div className="car-container">
  
      <input className="search" type="search" placeholder="search Car" />
      </div>
      <div className="container grid grid-three-cols">
        {cars !== null
          ? cars.map((car,index) => {
              return (
                    <NavLink className="getDtails" to = {`/admin/cars/${car._id}`} >
                <div className="card" key = {index}>
                  <div className="card-img">
                    <img src= {car.img_url} />
                  </div>

                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{car.brand}</p>
                      <p><FormatPrice price = {car.price}/>/Day</p>
                    </div>
                    <h2>{car.name}</h2>
                    {/* <p>{car.description}</p> */}
    
                    <button onClick={()=>{deleteCar(car._id)}}>Delete</button>
                    <Link className='link' to= {`/admin/cars/${car._id}`}>Edit</Link>
                    
                  </div>
                </div>
             
                  </NavLink>
                
              );
            })
          : "Cars not found,pleas check your internet"}
           
      </div>
     
    </section>
    </main>
  )
}

export default AdminCars
