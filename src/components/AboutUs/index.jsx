import React from "react";
import css from './about.module.css'

export const AboutUs =()=>{
    return <div>
        <div className={css.about}>
            <span>ABOUT US</span>
            <span className={css.MainText}>We want to help you thrive! Whether you are just looking for someone to talk to, 
                or are struggling with a mental wellness issue we’re here to help.  
                Our highly talented therapists can help you with a range of issues including relationships, 
                sex, PTSD, depression, social anxiety, or even just caring for yourself more.</span>
        </div>
        <div className={css.footerText}>
            WE CAN HELP YOU WITH
        </div>
    </div>
}