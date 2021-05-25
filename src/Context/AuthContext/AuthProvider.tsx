import {useReducer,createContext} from "react";
import { AuthContextModal, AuthState } from "./AuthContext.type";
import { reducerFunction } from "./ReducerFunction";
const AuthContext = createContext({} as AuthContextModal);
const initialAuthState : AuthState ={
    isLoggedIn:false
}
export const AuthProvider = ({children}:any)=>{
    const [authState,authDispatch] = useReducer(reducerFunction,initialAuthState)
    return (
        <AuthContext.Provider value={{authState,authDispatch}}>
        {children}
        </AuthContext.Provider>
    )
}