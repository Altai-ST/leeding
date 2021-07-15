import React from "react";
import css from './second-block.module.css'
import images from '../../images/christopher-campbell-40367.png'

export const SecondBlock = ()=>{
    return <div>
        <div className={css.MainBlock}>
            <div className={css.b1}>
                <h2>Why Thrive?</h2>
                <p>Want to improve your well-being from the comfort of your own couch? 
                    Are you having trouble finding the right therapist?
                <span> Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. 
                    Become your best self with ThriveTalk. Start therapy now with a licensed therapist!
                </span></p>
            </div>
            <div className={css.b2}>
                <img src={images} alt="" />
            </div>
        </div>
        
    </div>
}