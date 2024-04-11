import { SET_POST_ID } from "./postType"

export const setPostId = payload => {
    return{
        type: SET_POST_ID, 
        payload
    }
}