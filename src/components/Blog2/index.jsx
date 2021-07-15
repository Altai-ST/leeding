import React from "react";
import css from './Blog2.module.css'
import pic from '../../images/Blog2.png'

export const Blog2 =()=>{
    return <div className={css.MainBlock}>
        
        <div className={css.content}>
            <span className={css.head}>CONTACT US</span>

            <h3>Ready. Set. Smile</h3>

            <p>Take the free online assessment to see if you are a candidate and get started on your journey.
            </p>
            <button className={css.btn}>GET HELP NOW</button>
        </div>

        <div>
            <img src={pic} alt=""/>
        </div>
    </div>
}