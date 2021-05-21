import React, {} from "react";
import s from "../StylesModule/Navbar.module.sass";

export function Navbar(){

    return(
        <>
            <div className={s.navBar}>
                <a href="#" className={s.item}>Profile</a>
                <a href="#" className={s.item}>Messages</a>
                <a href="#" className={s.item}>News</a>
                <a href="#" className={s.item}>Music</a>
                <a href="#" className={s.item}>Settings</a>

            </div>
        </>
    )
}
