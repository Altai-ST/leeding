import React from "react";
import css from './MainPage.module.css'

export const MainPage = ()=>{
    return<div>
            <div className={css.container}>
                <header>
                    <a className={css.logo}>Thrivetalk</a>
                    <nav>
                        <div>Home</div>
                        <div>About</div>
                        <div>Service</div>
                        <div>Blog</div>
                    </nav>
                    <button className={css.btn}>Contact us</button>
                </header>
                <div className={css.block1}>
                        <a className={css.logo2}>Thrivetalk</a>
                        <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                        <p className={css.textL}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                        <div>
                            <button className={css.btnY}>WHO AM I</button>
                            <button className={css.btnD}>WHAT DO I DO</button>
                        </div>
                </div>  
            </div>
        </div>
}