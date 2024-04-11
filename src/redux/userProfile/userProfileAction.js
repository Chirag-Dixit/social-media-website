import { SET_USER_PROFILE } from "./userProfileType"

export const setUserProfile = payload => {
    return{
        type: SET_USER_PROFILE,
        payload
    }
}