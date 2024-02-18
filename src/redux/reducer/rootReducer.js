import { combineReducers } from "redux";
import { ReduserMovie } from "./ReducerMovie";
import { isloading } from "./ReducerLoader";


export const rootReducer = combineReducers({
    Movie:ReduserMovie,
    isloading:isloading,
})

