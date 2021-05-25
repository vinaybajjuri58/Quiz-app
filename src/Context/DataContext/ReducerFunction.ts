import {Action,DataState} from "./DataContext.types"
export const reducerFunction = (state:DataState,action:Action)=>{
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}