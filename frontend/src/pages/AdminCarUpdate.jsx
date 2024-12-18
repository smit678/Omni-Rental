import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import Star from '../Components/Star';
import FormatPrice from '../../Helpers/FormatPrice';
import { FaLongArrowAltLeft } from 'react-icons/fa';


const AdminCarUpdate = () => {

  const navigate = useNavigate()
    const params = useParams();
    const [singleCar, setSingleCar]= useState({
            name:"",
            img_url:"",
            price:"",
            description:"",
            brand:"",
            rating:"",
        });
         //console.log(params);
        const { authorizationToken } = useAuth();



        const getSingleCarData = async ()=>{
            try {
              
                    await axios.get(`http://localhost:5000/api/admin/cars/${params.id}`,{headers:{Authorization:authorizationToken},})
                    .then((res)=>{setSingleCar(res.data)})
                  
                  
            } catch (error) {
              console.log(error);
              }
            };
        
        
            useEffect(()=>{
                getSingleCarData();
            },[]);


            const handleInput = (e)=>{
                let name = e.target.name;
                let value = e.target.value;
               
                setSingleCar({
                   ...singleCar,
                   [name] : value,
               });
               };


               const handleSubmit = async(e)=>{
                e.preventDefault();
                
                try {
                   
                    await axios.patch(`http://localhost:5000/api/admin/cars/update/${params.id}`,singleCar,{headers:{Authorization:authorizationToken},})
                    .then((res)=>{console.log(res)})
                    navigate("/admin/cars")
                    toast.success("Updated successfuly")
                } catch (error) {
                    console.log(error);
                    
                }
            };

  return (
    <section>
      <main>
      <a href ="/admin/cars"><div className="back-Arrow"><FaLongArrowAltLeft /></div></a>
        <div className="section-CarInfo">
          <div className="container grid grid-two-cols">
          <div className="Car-image">
              <img src={singleCar.img_url} alt="kuchbhi" height={400} width={600}/>
            </div>

            <div className="Car-content">
              <p>Brand: <span>{singleCar.brand}</span></p>
              <h1>{singleCar.name}</h1>
             <p><Star stars = {singleCar.rating}/></p>
              <p>{singleCar.description}</p>
              <p> MRP <del> <FormatPrice price = { singleCar.price + 2500 } /></del><br />
                 { <FormatPrice price = { singleCar.price } /> }/Day
              </p>
              <p>Product_ID : {singleCar._id}</p>
            </div>
         </div>
         </div>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            {/* registration-form */}
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Update Car data</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">car name</label>
                  <input 
                      type="text" 
                      name='name'  
                      placeholder="name" 
                      id='name'
                      required
                      autoComplete="off"
                      value={singleCar.name}
                      onChange={handleInput}
                   />
                </div>

                <div>
                  <label htmlFor="price">price</label>
                  <input 
                      type="number" 
                      name='price'  
                      placeholder="price" 
                      id='price'
                      required
                      autoComplete="off"
                      value={singleCar.price}
                      onChange={handleInput}
                   />
                </div>
                
                <div>
                  <label htmlFor="description">description</label>
                  <textarea 
                      type="text" 
                      name='description'  
                      placeholder="description" 
                      id='description'
                      required
                      autoComplete="off"
                      cols="60"
                      rows="6"
                      value={singleCar.description}
                      onChange={handleInput}
                   />
                </div>

                <div>
                  <label htmlFor="brand">brand</label>
                  <input 
                      type="text" 
                      name='brand'  
                      placeholder="brand" 
                      id='brand'
                      required
                      autoComplete="off"
                      value={singleCar.brand}
                      onChange={handleInput}
                   />
                </div>

                <div>
                  <label htmlFor="rating">rating</label>
                  <input 
                      type="number" 
                      name='rating'  
                      placeholder="rating" 
                      id='rating'
                      required
                      autoComplete="off"
                      value={singleCar.rating}
                      onChange={handleInput}
                   />
                </div>

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

export default AdminCarUpdate
