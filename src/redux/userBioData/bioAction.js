import { SET_BIO } from "./bioType"

export const setBio = payload => {
    return{
        type: SET_BIO, 
        payload
    }
}