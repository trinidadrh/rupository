import React from 'react';
import '../style.css'

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <p className="brand">RUPOSITORY</p>
        <ul className="right">
          <li><a href='/home'>Home</a></li>
          <li><a href='/show'>Show</a></li>
          <li><a href='/wild'>Wild</a></li>
          <li><a href='/mood'>Mood</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar