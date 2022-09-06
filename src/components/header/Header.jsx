import React from 'react'
import Navbar from '../navbar/Navbar';
import './Header.css';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import calories from '../../assets/calories.png';
import { motion} from "framer-motion";


const Header = () => {
  const transition = {type:'spring', duration:5}
  return (
    <div className="hero" id='navbar'>
      <div className="h-left">
        <Navbar />
        <div className="awesome">
          <motion.div className="btn"
          initial={{left:'200px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
          ></motion.div>
          <div className="best"><span>The best coding world here</span></div>
        </div>
        <div className="blur"></div>
        <div className="h-text">
          <div className="h-text1"><span className='h-stoke'>Shape </span><span className='h-same'>Your</span></div>
          <div className='h-same'>Ideal body</div>
          <div className="h-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium ullam iure labore voluptatum nostrum velit voluptatibus nisi dolorum quibusdam.</div>
        </div>
        <div className="sponser">
          <div className="sec">
            <span>+140</span>
            <span>hello world</span>
          </div>
          <div className="sec">
            <span>+195</span>
            <span>hello nepal</span>
          </div>
          <div className="sec">
            <span>+180</span>
            <span>hello Miss</span>
          </div>

        </div>

        <div className="h-button1">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>


      <div className="h-right">
        <button>Join now</button>
        <div className="h-heart">
          <img src={heart} alt="" srcset="" />
          <span>Heart Rate</span><span>166 bpm</span>
        </div>
        <img className='curve' src={hero_image_back} alt="" srcset="" />
        <img className='hero_img' src={hero_image} alt="" srcset="" />

        <div className="calories">
          <img src={calories} alt="" srcset="" />
          <div className="calories-text">
            <span>Calories <br />burned</span><span>220 <br />Kcal</span>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Header;
