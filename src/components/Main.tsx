import React, {} from "react";
import s from '../StylesModule/Main.module.sass'
export function Main(){
    
    return(
        <div className={s.main}>
            <div className={s.title}>Counter + 2.5</div>
            <div className={s.value}>0</div>
            <button className={s.add}>+</button>
        </div>
    )
}
