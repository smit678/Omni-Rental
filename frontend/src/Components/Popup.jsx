import React, {  useState } from 'react'
import '../style/Popup.css'


const Popup = (children) => {
    const [showModal, setShowModal] = useState(false);


  return (
    <>
    <div className='modele-containere'>
        <div className='modela'>
            <div className='modele-headere'>
                <p className='close'>&times;</p>
            </div>
            <div className='modele-contente'>{children}</div>
            <div className='modele-footere'>
                <button className='btna-submitt'>Submit</button>
                <button className='btna-exit'>exit</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default Popup
