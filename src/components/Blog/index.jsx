import React from "react";
import css from './Blog.module.css'
import pic from '../../images/Blog.png'

export const Blog =()=>{
    return <div className={css.MainBlock}>
        <div>
            <img src={pic} alt=""/>
        </div>
        <div>
            <span className={css.head}>YOU SHOULD ALSO KNOW</span>

            <p>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. 
                population age 18 and older in a given year. 
                We at <span className={css.log}>ThriveTalk</span> can help you.
            </p>
            <button className={css.btn}>GET HELP NOW</button>
        </div>
    </div>
}