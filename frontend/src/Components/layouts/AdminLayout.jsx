import { NavLink, Outlet } from 'react-router-dom'
import { FaUser,FaHome } from "react-icons/fa";
import { FaMessage, FaCar} from "react-icons/fa6";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="nav-container">

        <nav>
           <ul className='adminList'>
               <li><NavLink to = "/admin/users"><FaUser /> Users</NavLink></li>
               <li><NavLink to = "/admin/feedbacks"><FaMessage /> Feedback</NavLink></li>
               <li><NavLink to = "/admin/cars"><FaCar /> Cars</NavLink></li>
               <li><NavLink to = "/"><FaHome /> Home</NavLink></li>
           </ul>
        </nav>
        </div>
      </header>
    <Outlet/>
    </>
  )
}

export default AdminLayout
