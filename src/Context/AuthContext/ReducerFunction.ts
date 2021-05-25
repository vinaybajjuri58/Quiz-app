import {AuthState,Action} from "./AuthContext.type"
import * as ActionTypes from "./ActionTypes";
export const reducerFunction =(state:AuthState,action:Action)=>{
    switch(action.type){
        case ActionTypes.SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn : true
            }
        default :
            return {
                ...state
            }
    }
}
