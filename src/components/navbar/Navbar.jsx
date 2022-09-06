import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar" id='navbar'>
      <img src={logo} alt="" srcset="" />
      <ul>
        <li><Link spy={true} to='navbar' activeClass='active'>Home</Link> </li>
        <li><Link spy={true} to='program' smooth={true} activeClass='activeClass'>Programs</Link> </li>
        <li><Link spy={true} to='why' smooth={true} activeClass='activeClass'>Why Us</Link></li>
        <li><Link spy={true} to='plans' smooth={true} activeClass='activeClass'>Plans</Link></li>
        <li><Link spy={true} to='testimonials' smooth={true} activeClass='activeClass'>Testimonials</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
