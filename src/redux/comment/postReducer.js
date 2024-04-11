import { SET_POST_ID } from "./postType"

const initialState = {
    postId: ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POST_ID: return{
            postId: action.payload
        }

        default: return state
    }
}

export default postReducer