import React from 'react'
import './Program.css'
import { programsData } from "../../data/programsData"
import arrowImage from "../../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="program1" id='program'>
      <div className="program">
        <span className='h-stoke'>explore our</span>
        <span>programs</span>
        <span className='h-stoke'>to shape you</span>
      </div>
      <div className="card">
        <div className="cardAll">
          {
            programsData.map((program, index) => {
              return (
                <div className="cardAll1" key={index}>
                  <span>{program.image}</span>
                  <span>{program.heading}</span><span>{program.details}</span>
                  <div className="join-now"><span>Join now</span><img src={arrowImage} alt="" srcset="" /></div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Program;
