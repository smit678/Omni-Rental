import React, { useState, useEffect } from "react";
import "../style/Cars.css";
import axios from "axios";
import { FaLongArrowAltLeft } from "react-icons/fa";
import FormatPrice from "../../Helpers/FormatPrice";
import { useNavigate } from "react-router-dom";



const Cars = () => {
  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://192.168.1.15:5000/api/cars")
      .then((res) => setCarList(res.data));
  }, []);




  return (
    <main>
    <section className="section-cars">
      
      <div className="car-container">
  
      <input className="search" type="search" placeholder="search Car" />
      </div><br />
      <a  href="/" ><div className="back-Arrow"><FaLongArrowAltLeft /></div></a>
      <div className="container grid grid-three-cols">
        {carList !== null
          ? carList.map((car,index) => {
              return (
                    //<NavLink className="getDtails" to = {`/info/${car._id}`} >
                <div className="card" key = {index} onClick={()=>{navigate(`/info/${car._id}`)}}>
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
                    <a href={`/info/${car._id}`} ><button>Rent Now</button></a>
                  </div>
                </div>
             
                  //</NavLink>
                
              );
            })
          : "Cars not found,pleas check your internet"}
           
      </div>
     
    </section>
    </main>
  );
};

export default Cars;
