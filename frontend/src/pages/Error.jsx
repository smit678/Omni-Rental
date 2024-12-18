import React from 'react'
import "../style/Error.css";
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section id='error-page'>
        <div className='content'>
            <h2 className='header'>404</h2>
            <h4>Sorry! Page note found</h4>
            <p>bhai galat URL dala </p>
            <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/feedback">report problem</NavLink>
            </div>
        </div>

      </section>
    </>
  )
}

export default Error
