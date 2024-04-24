import { SET_SEARCH } from "./searchType"

export const setSearch = payload => {
    return{
        type: SET_SEARCH, 
        payload
    }
}