import {createStore} from "redux";

const defaultState = {
    point: 0
}
export type DefaultStateType = {
    point: number
}

const reducer = (state: DefaultStateType = defaultState,action: ActionsType): DefaultStateType => {
    switch (action.type){
        case "ADD_POINT":
            return {...state, point: state.point + action.payload}

        default:
            return state
    }
}
export const store = createStore(reducer)

export const  AddPointAC = (point: number) => ({type: "ADD_POINT", payload: point})
type ActionsType = ReturnType<typeof AddPointAC>

// <Provider
