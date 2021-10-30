import React from "react"

export type AuthState ={
    isLoggedIn : boolean
}
export type Action ={
    type:string
}
export type AuthContextModal ={
    authState:AuthState,
    authDispatch:React.Dispatch<Action>
}