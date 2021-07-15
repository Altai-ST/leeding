import React from "react";
import css from './Contacts.module.css'
import pic from '../../images/Contacts.png'

export const Contacts =()=>{
    return <div className={css.MainBlock}>
        <div>
            <img src={pic} alt=""/>
        </div>

        <div className={css.content}>
            <div>
                <h3 className={css.hContent}>SOME INFO</h3>
                <div className={css.ContentBlock1}>
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                </div>
            </div>
            <div>
                <h3>ENFOLD HEALTH</h3>
                <div className={css.ContentBlock}>
                    <p className={css.adress}>
                        Main Street 1, Olcott
                        Buffalo, United States
                    </p>
                    <span>+555 283 784 333</span> <br />
                    <a href="#">office@enfold-health.com</a>
                </div>
                
            </div>
            <div>
                <h3>OFFICE HOURS</h3>
                <div className={css.ContentBlock}>
                    <p className={css.time}>Mo-Fr: 8:00-19:00</p>
                    <p className={css.time}>Sa: 8:00-14:00</p>
                    <p className={css.time}>Su: closed</p>
                </div>
               
            </div>
        </div>

        
    </div>
}