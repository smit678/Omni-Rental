import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import FormatPrice from '../../Helpers/FormatPrice';
import '../style/CarBooking.css';
import moment from 'moment';

const CarBooking = () => {

const params = useParams();
const [carInfo,setCarInfo] = useState("");
const [time ,setTime] = useState("")
const [isLoading , setIsLoading] = useState("flase");
const [a,setA] = useState("")

// let time = new Date().getHours()
// let tarikh = new Date().getDate()
// let mahino = new Date().getMonth()
// let varas = new Date().getFullYear()
// const d = (tarikh + "-" + mahino +"-" + varas)


const t = moment().format('DD MMMM  YYYY, h:mm:ss a') ; 
const { user } = useAuth();
let cname = carInfo.name
let id = a.car_id
let to = a.todate
let from = a.fromdate




 const orderDetails = async ()=>{
  try {
    await axios.get(`http://192.168.1.15:5000/api/orders/${params.id}`)
            .then((res)=>{ setA(res.data)} ,setTime(t))
            
  } catch (error) {
    console.log(error);
    
  }
 }



 if(isLoading === "flase"){
  axios.get(`http://192.168.1.15:5000/api/cars/${id}`)
  .then((res)=>{ 
                  setCarInfo(res.data)
                 setIsLoading("true")
                   })
  }
  // const getSingleCar = async ()=>{
  //   try {
      
  //           await axios.get(`http://192.168.1.15:5000/api/cars/${id}`)
  //           .then((res)=>{ setCarInfo(res.data)

  //           })
            
            
  //         } catch (error) {
  //                             console.log(error);
  //                         }
  //        };


   useEffect(()=>{
    orderDetails()
   },[])

  
  return (
    <div className='section'>
      <div className="recipt">
        <div className="rno">
        <h1>Reciept</h1>
        <div><h5>Order ID :</h5> <h6>{a.order_id}</h6></div>
        </div>
        <div className="summery">
      <div className="car-details">
     <div> <h4>Booking-Time :</h4><p>{time}</p></div>
    <div> <h4>Car-Name :</h4><p>{cname}</p></div>
    <div> <h4>vehicle_id:</h4><p>{id}</p></div>
      </div>
      <div className="line"></div>
      <div className="user">
      <div><h4>Name :</h4> <p>{user.name}</p></div>
      <div><h4>U_ID : </h4><p>{user._id}</p></div>
      <div><h4>Date :</h4> <p>{a.fromdate} TO {a.todate}</p></div>
      </div>
      </div>
      <div className="amount">
     <div> <h4>Total Amount </h4><p>{a.fromdate?<FormatPrice price = { (from.slice(8,10) - to.slice(8,10) + 1)*carInfo.price } />:"null"}</p></div>
      </div>
      </div> 
      {/* <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>todate</th>
              <th>fromdate</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {order.map((ele,index)=>{
           
              return <tr key={index}>
             <td>{index + 1}</td>
             <td>{ele.name}</td>
             <td>{ele.email}</td>
             <td>{ele.todate}</td>
             <td>{ele.fromdate}</td>
             <td><button>Delete</button></td>
      </tr>
        
    })}
          </tbody>
        </table> */}
         <a href="/cars">
        <button  className='btn btn-submit'>Back to Home</button>
        </a>
    </div>
  )
}

export default CarBooking
