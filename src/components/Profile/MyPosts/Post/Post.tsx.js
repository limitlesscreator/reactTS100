import React, {} from "react";
import s from '../../../../StylesModule/Post.module.sass'
export function Post(){
    
    return(
        <>
            <div className={s.postFlex}>
                <img className={s.postImg} src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt=""/>
                <div className={s.post}>
                    <div >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor
                        explicabo hic ipsa odit optio possimus quia sunt voluptate! Aspernatur atque debitis itaque
                        numquam pariatur porro quia. Dolor, dolorem recusandae!
                    </div>
                    <div className={s.likes}>5 &#128420;</div>
                </div>

            </div>

        </>
    )
}
