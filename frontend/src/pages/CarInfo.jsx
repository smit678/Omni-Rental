import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import "../style/CarInfo.css"
import FormatPrice from '../../Helpers/FormatPrice';
import Star from '../Components/Star';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
// import Popup from '../Components/Popup';
//import DatePicker from "react-datepicker";
//import { DateRange } from 'react-date-range';


const CarInfo = () => {
const navigate = useNavigate();
  const params = useParams();
const [singleCar , setSingleCar]= useState("");



var time = new Date().getTime();

const [order,setOrder] = useState({
  order_id:"",
  u_id:"",
  name:"",
  email :"",
  fromdate:"",
  todate:"",
}) 



const [userData, setUserData]= useState(true);
const { user } = useAuth();

var o = user._id + time


if(userData && user){
  setOrder({
    order_id : (user._id + time),
    u_id: user._id,
    name: user.name,
    email: user.email,
    fromdate:"",
    todate:"",
  });
  setUserData(false);
}


var a = order.todate ;
var b = order.fromdate ;

const handleInput = (e)=>{
  let name = e.target.name ;
  let value = e.target.value ;
  
  setOrder({
   ...order,
   [name] : value,
 });

 };

// const [todate, setTodate] = useState([]);
// const [fromdate, setFromdate] = useState([]);

// const [todateformat, setTodateformat] = useState([]);
// const [fromdateformat, setFromdateformat] = useState([]);




// const handletodate = (e)=>{
//   const getToDatevalue = e.target.value
  
//   const setdateformat = getToDatevalue.split('-');
  
//   const settoyear = setdateformat[0];
//   const settomonth = setdateformat[1];
//   const settodate = setdateformat[2];
  
//   const settodateformat = settodate+""+settomonth+""+settoyear;
//   setTodate(getToDatevalue)
//   setTodateformat(settodateformat)
//   setDisable(false);
// };


// const handlefromdate = (e)=>{
//   const getFromDatevalue = e.target.value
  
//   const setfromformat = getFromDatevalue.split('-');

//   const setfromyear = setfromformat[0];
//   const setfrommonth = setfromformat[1];
//   const setfromdate = setfromformat[2];
  
//   const setfromformatdate = setfromdate+""+setfrommonth+""+setfromyear;
//   setFromdate(getFromDatevalue)
//   setFromdateformat(setfromformatdate)
// };

// const handleInput = (e)=>{
//   let name = e.target.name ;
//   let value = e.target.value ;

//   setDate({
//     ...date,
//     [name]:value,
//   });
// };

const handleSubmit = async(e)=>{
 e.preventDefault();

  
 try {
             
    await axios.post(`http://localhost:5000/api/cars/${params.id}/booking`,order)
    .then((res)=>{
      console.log(res.data)
      
      if( order.todate > order.fromdate ){
        alert("please select day before")
      }else{
        navigate(`/booking/${order.order_id}`)
        //console.log(`${order.todate} TO ${order.fromdate}`)
        toast.success(`Order placed successful`);
        alert("are you sure")
      }
    })




 } catch (error) {
  console.log(error);
 }
  
  
};

//  const [startDatea, setStartDate] = useState("");
//  const [endDatea, setEndDate] = useState("");
//  const [count , setCount] = useState("0")
  


// const [dateTo,setDateTo] = useState([{
//     start: "",
//     end: "",
//   }])


// const handleInput=(e)=>{
//   let startDate = e.target. selectsStart;
//   let endDate = e.target.selectsEnd;
//   setDateTo([{
//              start: startDate,
//              end: endDate,
//               }])
// };

  const getSingleCar = async ()=>{
    try {
      
            await axios.get(`http://localhost:5000/api/cars/${params.id}`)
            .then((res)=>{
              console.log(res);
              setSingleCar(res.data)
            })
            
        } catch (error) {
                  console.log(error);
        }
  };


    useEffect(()=>{
      getSingleCar()
     },[])
  return (
<>

 <main>
 <a href ="/cars"><div className="back-Arrow"><FaLongArrowAltLeft /></div></a>
<section className='section-CarInfo'>
          <div className="container grid grid-two-cols">
          <div className="Car-image">
              <img src={singleCar.img_url} alt="kuchbhi" height={400} width={600}/>
            </div>

            <div className="Car-content">
              <p>Brand: <span>{singleCar.brand}</span></p>
              <h1>{singleCar.name}</h1> <br />
             <Star stars = {singleCar.rating}/>
              <p>{singleCar.description}</p>
              <p> MRP <del> <FormatPrice price = { singleCar.price + 2500 } /></del><br />
                 { <FormatPrice price = { singleCar.price } /> }/Day
              </p>
              <p>Product_ID : {singleCar._id}</p>
            </div>
         </div>
           <div className='squar'>
            <div className="filldetail">
              <form onSubmit={handleSubmit} >
                <div className="heding">
                      <h3>Fill the form</h3>   
                </div>
                 <div className="Orderinfo">
                      <div className="userinfo">
                        <div>
                        <label htmlFor="name">Name</label>
                        <input 
                             className='input'
                             type="text"
                             name='name'
                             autoComplete="off"
                             value={order.name}
                             onChange={handleInput} 
                             required
                        />
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input 
                             className='input'
                             type="text"
                             name='email'
                             autoComplete="off"
                             value={order.email}
                             onChange={handleInput} 
                             required
                        />
                        </div>
                     
                     <div className='date-time'>
                      <div className='cal'>
                      <label htmlFor="fromdate">FROM</label>
                      <div className="fromdate">
                       <input 
                           className='date'
                            type="date" 
                            name='todate'
                            required
                            value={order.todate}
                            onChange={handleInput}
                        />
                        </div>
                        </div>
                      <div className='cal'>
                      <label htmlFor="todate">TO</label>
                      <div className="todate">
                        <input
                           className='date' 
                            type="date" 
                            name='fromdate'
                            required
                            value={order.fromdate}
                            onChange={handleInput}
                            />
                      </div>
                      </div>
                      </div>
                     </div>
                    
                               <div className='bill'>

                               <p>Date Range :{order.todate ? order.todate : "__-__-__"} to {order.fromdate ?order.fromdate:"__-__-__"}</p>
                               <p>Total Days :{order.fromdate ?(b.slice(8,10) - a.slice(8,10) + 1):"--"} Days to Rent</p>
                               <p>Total Amount :
                                   {order.fromdate ?<FormatPrice price = { (b.slice(8,10) - a.slice(8,10) + 1)*singleCar.price } />: "please enter both date"}
                               </p>
                               </div>
                      
                     <button type='submit' >Pay Now</button>
                    
                 </div>
               </form>
               </div>
            </div>
        </section>
        </main>
       </>
  )
};
    

export default CarInfo
