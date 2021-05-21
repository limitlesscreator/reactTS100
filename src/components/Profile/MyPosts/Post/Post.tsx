import React, {} from "react";
import s from '../../../../StylesModule/Post.module.sass'

type MyPostsPropsType = {
    message: string
}

export function Post(props:MyPostsPropsType){
    return(
        <div className={s.object}>
            <div className={s.postFlex}>
                <img className={s.postImg} src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt=""/>
                <div className={s.post}>
                    <div className={s.message}>{props.message}
                    </div>

                </div>
            </div>
            <div className={s.likes}>5 &#128420;</div>
        </div>
    )
}
