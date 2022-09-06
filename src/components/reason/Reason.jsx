import React from 'react'
import './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import tick from '../../assets/tick.png';

const Reason = () => {
    return (
        <div className="reason" id='why'>
            <div className="r-left">
                <div className="r-item1"><img src={image1} alt="" /></div>
                <div className="r-item2"><img src={image2} alt="" /></div>
                <div className="r-item3"><img src={image3} alt="" /></div>
                <div className="r-item4"><img src={image4} alt="" /></div>
            </div>
            <div className="blur"></div>
            <div className="r-right">
                <span>some reasons</span>
                <div className="why">
                    <span className='h-stoke'>why</span>choose<span></span>us?<span></span>
                </div>
                <div className="options">
                    <span><img src={tick} alt="" /> Over 140+ expert coaches</span><span><img src={tick} alt="" />TRAIN SMARTER AND FASTER THAN BEFORE</span><span><img src={tick} alt="" />1 FREE PROGRAM FOR NEW MEMBER</span><span><img src={tick} alt="" />RELIABLE PARTNERS</span>
                </div>
                <div className="partner">
                    <span>OUR PARTNERS</span>
                </div>
                <div className="r-icons">
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reason;
