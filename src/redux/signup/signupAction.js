import { SIGN_UP } from "./signupType";

export const signUp = (payload) => {
    return{
        type: SIGN_UP,
        payload
    }
}