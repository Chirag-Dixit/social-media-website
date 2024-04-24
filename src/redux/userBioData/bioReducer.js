import { SET_BIO } from "./bioType"

const initialState = {
    bioData: []
}

const bioReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_BIO: return{
            bioData: action.payload
        }

        default: return state
    }
}

export default bioReducer