import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import postReducer from "./comment/postReducer";
import bioReducer from "./userBioData/bioReducer";
import filterReducer from "./Filter/filterReducer";
import searchReducer from "./Search/searchReducer";

const rootReducer = combineReducers({
    login: loginReducer, 
    userProfile: userProfileReducer,
    post: postReducer,
    bio: bioReducer,
    filter: filterReducer,
    search: searchReducer
})

export default rootReducer