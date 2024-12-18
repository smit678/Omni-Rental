import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import { useAuth } from '../store/auth'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
 

//  if(isLoading) {
//   <h1>Loading</h1>
//   }

//   if(!user.isAdmin) {
//     <li><NavLink to ="/admin" className="navbar-link" onClick={() => setMenuIcon(false)}>Admin</NavLink></li>
//     }
 
  return (
        <div className="nav-container">
        <div className="logo">
            <img  src="\logo.png" alt="brand-logo" width={100} height={40} />
        </div>
        <nav className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
              <li><NavLink to ="/" className="navbar-link" onClick={() => setMenuIcon(false)}>Home</NavLink></li>
              <li><NavLink to ="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>About</NavLink></li>
              <li><NavLink to ="/cars" className="navbar-link" onClick={() => setMenuIcon(false)}>Cars</NavLink></li>
              <li><NavLink to ="/feedback" className="navbar-link" onClick={() => setMenuIcon(false)}>Feedback{user.isAdmin}</NavLink></li>
              
             {/* {!!isAdmin ?
                <li><NavLink to ="/admin" className="navbar-link" onClick={() => setMenuIcon(false)}>Admin</NavLink></li>:""
                
                } */}


              { isLoggedIn 
              ?
               <>
               <li><NavLink to ="/logout" className="navbar-link" onClick={() => setMenuIcon(false)}>Logout</NavLink></li>
               </>
              

              : <>
              <li><NavLink to ="/register" className="navbar-link" onClick={() => setMenuIcon(false)}>Register</NavLink></li>
              <li><NavLink to ="/login" className="navbar-link" onClick={() => setMenuIcon(false)}>Login</NavLink></li>
              </>
              
            }
              
              
            </ul>
            <div className='mobile-nav-btn'>
            <CgMenu name='menu-outline' className='mobile-icon' onClick={() => setMenuIcon(true)}/>
            <CgClose name='close-outline' className='mobile-icon close-outline'  onClick={() => setMenuIcon(false)}/>
            </div>
        </nav>
        </div>
  )
}

export default Navbar
