import {SET_SEARCH_FILTER} from './filterType'

const initialState = {
    filter: ''
}

const filterReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_SEARCH_FILTER: return{
            filter: action.payload
        }

        default: return state
    }
}

export default filterReducer