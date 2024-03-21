import { SIGN_UP } from "./signupType";

const initialState = {
    mockData: {
        userName: '',
        emailAddress: '',
        password: ''
    },
    userData: []
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP: return{
            ...state,
            userData: [...state.userData, action.payload]
        }

        default: return state
    }
}

export default signupReducer