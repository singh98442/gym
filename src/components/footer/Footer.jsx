import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="foot1">
            <img src={github} alt="" /><img src={instagram} alt="" /><img src={linkin} alt="" />
        </div>
        <div className="foot2">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer;
