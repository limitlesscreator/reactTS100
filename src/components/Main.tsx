import React, {} from "react";
import s from '../StylesModule/Main.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {AddPointAC, DefaultStateType} from "../redux/store";
export function Main(){

    const dispatch = useDispatch()
    const point = useSelector<DefaultStateType, number>(state => state.point)

    const addPoint = () => {
        dispatch(AddPointAC(1))
    }
    
    return(
        <div className={s.main}>
            <div className={s.title}>Counter + 2.5</div>
            <div className={s.value}>{point}</div>
            <button onClick={addPoint} className={s.add}>+</button>
        </div>
    )
}
