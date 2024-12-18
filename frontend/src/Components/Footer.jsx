import React from 'react'
import "../style/Footer.css"
const Footer = () => {
  return (
    <>
  
     <footer className='footer-containt'>
     <div className="footer-heading">
            <h1 className='header'>thank you for wisiting our site...</h1>
       
        </div>
        <div className="icon-Group">
        <div className='icon'><a href="https://www.instagram.com/_smit_2401/"><img src="/facebookicon.png" alt="facebook icon" width={30} height={30}/></a> </div>
        <div className='icon'><a href="https://www.instagram.com/_smit_2401/"><img src="/instagramicon.png" alt="instagram icon" width={30} height={30}/></a></div>
        <div className='icon'><a href="https://www.instagram.com/_smit_2401/"><img src="/twittericon.png" alt="twitter icon" width={30} height={30}/></a></div>
        <div className='icon'><a href="https://www.linkedin.com/in/smit-vasava-295790316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/linkedinicon.png" alt="twitter icon" width={30} height={30}/></a></div>
        </div>
         <div><h6>devloped by @smit , Email-vasavasmit2004@gmail.com , @2024</h6></div>
     </footer>
     
    </>
  )
}

export default Footer
