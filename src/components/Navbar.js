import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';
import {useState} from 'react';
import {Link} from 'react-scroll';




function Navbar() {
  const [count, setCount] = useState(23);


  return (
    <nav className="navbar font-link">
      <button className='glow-on-hover' onClick = {() => setCount(count => count+1)}><span className='font-link'>LIKES: {count}</span> </button>
      <button className='glow-on-hover'><Link className="font-link" to="skills" smooth={true} duration={500}>Skill and Thrills</Link></button>
      <button className='glow-on-hover'><Link className="font-link" to="/">Portfolio</Link></button>
      <button className='glow-on-hover'><Link className="font-link" to="/">Contact</Link></button>
    </nav>
  );
}

export default Navbar;
