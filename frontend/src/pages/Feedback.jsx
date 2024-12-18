
import axios from 'axios';
import { useState } from 'react'
import { toast } from 'react-toastify';
import "../style/Feedback.css"
import { useAuth } from '../store/auth';


const Feedback = () => {
  const [feedback ,setFeedback] = useState({
    name:"",
    email:"",
    message:"",
  });

const [userData, setUserData]= useState(true);
const { user } = useAuth();

if(userData && user){
  setFeedback({
    name: user.name,
    email: user.email,
    message: "",
  });
  setUserData(false);
}
  

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFeedback({
      ...feedback,
      [name]:value,
    })};

    const handleSubmit = async (e)=>{
      e.preventDefault();

      // console.log(feedback);

      await axios.post(`http://localhost:5000/api/feedback`, feedback, {Header:{"Content-Type": "application/json"}})
      .then((res)=>{console.log("feedback send success");
      if(res.status){
        toast.success("hello,feedback send  successful");
         setFeedback({message:""})

     
       } 
      })
      .catch((error)=>{console.log(error);
        toast.error("invalid credential")
      })
     };

  return (
    <>
    <main>
    <section className="section-feedback">
      {/* <div className="feedback-content container">
        <h1 className="main-heading">give feedback</h1>
      </div> */}
      {/* feedback page main  */}
      <div className="container grid grid-two-cols">
        <div className="feedback-img">
          <img src="/bmw.jpg" alt="we are always ready to help" width={600} height={400}/>
        </div>

        {/* feedback form content actual  */}
        <section className="section-form">
        <h1 className="main-heading">give feedback</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={feedback.name}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={feedback.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={feedback.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div>
              <button type="submit" >submit</button>
            </div>
          </form>
        </section>
      </div>

      <section className="mb-3">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.860425443651!2d73.19167977498365!3d22.288724143315505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f00186c03f%3A0x5910141015775c9b!2s1%2C%20Lalbagh%20Rd%2C%20Moti%20Baug%2C%20Vadodara%2C%20Gujarat%20390001!5e1!3m2!1sen!2sin!4v1725440926424!5m2!1sen!2sin" 
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
    </main>
  </>
  )
};

export default Feedback

//://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261317327889https6!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin

