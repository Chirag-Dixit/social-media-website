import { SET_SEARCH_FILTER } from "./filterType";

export const setFilter = payload => {
    return{
        type: SET_SEARCH_FILTER,
        payload
    }
}