import { SET_SEARCH } from "./searchType"

const initialState = {
    value: ''
}

const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_SEARCH: return{
            value: action.payload
        }

        default: return state
    }
}

export default searchReducer