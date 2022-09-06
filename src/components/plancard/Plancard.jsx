import React from 'react'
import './Plancard.css'
import { plansData } from '../../data/plansData';
import tick from '../../assets/tick.png'

const Plancard = () => {
    return (
        <div className="plancard" id='plans'>
            <div className="p-text">
                <span className='h-stoke'>READY TO START</span>
                <span>YOUR JOURNEY </span>
                <span className='h-stoke'>NOW WITH US</span>
            </div>
            <div className="card">
                {
                    plansData.map((plan, index) => {
                        return (
                            <div className="cards" key={index} >
                                {plan.icon}
                                <span>{plan.name}</span><span>$ {plan.price}</span>
                                <div className="feature">
                                    {plan.features.map((feature,i)=>(
                                        <div className="fea">
                                            <img src={tick} alt="" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="blur"></div>
                                <div className="see">
                                    <span>see more benefits</span><span>-></span>
                                </div>
                                <button className='r-btn'>join now</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Plancard;
