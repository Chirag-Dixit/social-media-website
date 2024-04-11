import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import postReducer from "./comment/postReducer";

const rootReducer = combineReducers({
    login: loginReducer, 
    userProfile: userProfileReducer,
    post: postReducer
})

export default rootReducer