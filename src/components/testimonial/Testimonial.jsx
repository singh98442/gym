import React, { useState } from 'react'
import './Testimonial.css'
import { testimonialsData } from '../../data/testimonialsData';
import leftarrow from '../../assets/leftArrow.png';
import rightarrow from '../../assets/rightArrow.png';

const Testimonial = () => {
  const [select, selected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonial" id='testimonials'>
      <div className="t-left">
        <span>TESTIMONIALS</span>
        <span className='h-stoke'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span className='t-text' style={{
          color: 'white'
        }}>
          {testimonialsData[select].review}
        </span>
        <span className='t-text'>
          <span>{testimonialsData[select].name}</span>
          <span> - </span>
          <span>{testimonialsData[select].status}</span>
        </span>
      </div>
      <div className="t-right">
        <div className="t-empty1"></div>
        <div className="t-empty2"></div>
        <div className="tpro">
          <img src={testimonialsData[select].image} alt="" />
        </div>
        <div className="arrow">
          <img onClick={
            () => {
              select === 0 ? selected(tlength - 1) : selected(select - 1)
            }
          } src={leftarrow} alt="" />
          <img onClick={
            () => {
              select === (tlength - 1) ? selected(0) : selected(select + 1)
            }
          } src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
