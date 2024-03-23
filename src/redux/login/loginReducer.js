import { LOG_IN, LOG_OUT } from "./loginType"

const initialState = {
    isLoggedIn: false,
    userData: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN: return {
            isLoggedIn: true,
            userData: action.payload
        }

        case LOG_OUT: return {
            isLoggedIn: false,
            userData: null
        }

        default: return state
    }
}

export default loginReducer