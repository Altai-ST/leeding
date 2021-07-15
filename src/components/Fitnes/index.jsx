import React from "react";
import css from './Fitnes.module.css'

export const Fitnes =()=>{

    return <div>
        <div className={css.Fit}>
            <div className={css.b1}>
                <ul>
                    <li><span>Weight Lifting</span></li>
                </ul>
            </div>
            <div className={css.b2}>
                <ul>
                    <li><span>Running  & Spinning</span></li>
                </ul>
            </div>
            <div className={css.b3}>
                <ul>
                    <li><span>Pumping Iron</span></li>
                </ul>
            </div>
            <div className={css.b4}>
                <ul>
                    <li><span> Pumping Iron</span></li>
                </ul>
            </div>
        </div>
    </div>
}