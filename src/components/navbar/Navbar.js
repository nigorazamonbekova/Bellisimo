import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className="container">
            <div className="navbar">
                <h1>NavbarLogo</h1>
                <ul className='content'>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
