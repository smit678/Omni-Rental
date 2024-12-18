import {BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cars from "./pages/Cars";
import Feedback from "./pages/Feedback";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./Components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminFeedback from "./pages/AdminFeedback";
import CarInfo from "./pages/CarInfo";
import AdminUpdate from "./pages/AdminUpdate";
import CarBooking from "./pages/CarBooking";
import "react-datepicker/dist/react-datepicker.css";
import AdminCars from "./pages/AdminCars";
import AdminCarUpdate from "./pages/AdminCarUpdate";

const App = () => {
  return (
   <>
   <BrowserRouter>
     <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/cars" element={<Cars/>} />
           <Route path="/info/:id" element={<CarInfo/>} />
           <Route path="/booking/:id" element={<CarBooking/>} />
            
           <Route path="/feedback" element={<Feedback/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/logout" element={<Logout/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/*" element={<Error/>} />
           <Route path = "/admin" element={<AdminLayout/>}>
                    <Route path="users" element={<AdminUsers/>}/>
                    <Route path="feedbacks" element={<AdminFeedback/>}/>
                    <Route path="cars" element={<AdminCars/>}/>
                    <Route path="cars/:id" element={<AdminCarUpdate/>}/>
                    <Route path="users/:id" element={<AdminUpdate/>} />
                    
           </Route>
        </Routes>
       <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App

