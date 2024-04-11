import { SET_USER_PROFILE } from "./userProfileType"

const initialState = {
    userName: '',
    userBio: '',
    userLikesCount: 0, 
    userPostsCount: 0
}

const userProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_PROFILE: return {
            userName: action.payload.userName,
            userBio: action.payload.bio,
            userLikesCount: action.payload.likesCount,
            userPostsCount: action.payload.postsCount,
        }

        default: return state
    }
}

export default userProfileReducer