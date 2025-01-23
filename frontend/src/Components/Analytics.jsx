import axios from 'axios'
import "../style/Analytics.css";
import React, { useState, useEffect} from 'react'


    
const Analytics = () => {

  // number of brand
  const [brand, setBrand] = useState(null);
  useEffect(() => {
   axios
      .get("http://192.168.1.15:5000/api/cars")
      .then((res) => setBrand(res.data.length));
  }, []);        

  //number of customer
 const [user, setUser]= useState(null);

useEffect( ()=>{
  axios.get("http://192.168.1.15:5000/api/user")
       .then((res)=>{setUser(res.data.length);
  })
},[]);

  return (
  <>
  
    <section className='section-analytics'>
            <div className='container grid grid-four-cols'> 
            <div className='div-1'>
                <h2>{`${brand}+`}</h2>
              <p>car brands</p>
            </div>
            <div className='div-1'>
              <h2>{`${user}+`}</h2>
              <p>Users</p>
            </div>
            <div className='div-1'>
              <h2>50+</h2>
              <p>Workers</p>
            </div>
            <div className='div-1'>
              <h2>24/7</h2>
              <p>service</p>
            </div>
            </div>
        </section>
  </>
  )
}

export default Analytics
