import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';



function Navbar() {
 
  return (
    <nav className="navbar font-link">
      
      <button className='glow-on-hover'><a className="font-link" href="/">Skill and Thrills</a></button>
      <button className='glow-on-hover'><a className="font-link" href="/">Portfolio</a></button>
      <button className='glow-on-hover'><a className="font-link" href="/">Contact</a></button>
    </nav>
  );
}

export default Navbar;
