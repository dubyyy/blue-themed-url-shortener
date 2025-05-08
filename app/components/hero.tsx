import React from "react";
import css from './hero.module.css'
import Link from "next/link";

const Hero=()=>{
    return(
        <div className={css.container}>
             <div className={css.box}>
                <div className={css.icon}>
                    <div className={css.red}></div>
                    <div className={css.yellow}></div>
                    <div className={css.grey}></div>
                </div>

                <div className={css.textContainer}>
                    <div className={css.text}>
                       <div>
                        
                       </div>
                        <p>
                            https://short.ly/xyz
                        </p>
                    </div>
                </div>

                <div className={css.buttonContainer}>
                    <Link href='/dashboard'>
                        <button className={css.btn}>Get Started</button>
                    </Link>
                    
                </div>

            </div>
        </div>
       
    )
}
export default Hero