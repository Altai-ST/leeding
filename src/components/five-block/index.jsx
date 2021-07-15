import React from "react";
import css from './Five-block.module.css'

export const FiveBlock=()=>{
    return <div>
        <div className={css.MainBlock}>
            <div className={css.b1}>
                <ul>
                    <li><span>Physical Health</span></li>
                </ul>
            </div>
            <div className={css.b2}>
                <ul>
                    <li><span>Mental Health</span></li>
                </ul>
            </div>
            <div className={css.b3}>
                <ul>
                    <li><span>Nutrition</span></li>
                </ul>
            </div>
            <div className={css.b4}>
                <ul>
                    <li><span>Gymnastics</span></li>
                </ul>
            </div>
            <div className={css.b5}>
                <ul>
                    <li><span>Crossfit</span></li>
                </ul>
            </div>
            <div className={css.b6}>
                <ul>
                    <li><span>Aerobics</span></li>
                </ul>
            </div>
        </div>
    </div>
}