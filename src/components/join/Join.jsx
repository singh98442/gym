import React from 'react';
import './Join.css'




const join = () => {

    return (
        <div className="join">
            <div className="j-left">
                <hr />
                <div className="j-text1">
                    <span className='h-stoke'>READY TO</span><span>LEVEL UP</span>
                </div>
                <div className="j-text2">
                    <span>YOUR BODY</span>
                    <span className='h-stoke'>
                        WITH US?
                    </span>
                </div>
            </div>
            <div className="blur"></div>
            <div className="j-right">
                <div className="j-form">
                    <form className='formof'>
                        <input type="email" placeholder='Enter your Email' name='user_email' />
                        <button type='submit'>Join now</button>
                    </form>
                </div>
            </div>


        </div >
    )
}

export default join;
