import { createContext, useContext, useReducer } from "react";
import { DataContextModal,DataState } from "./DataContext.types";
import {reducerFunction} from "./ReducerFunction"

const initialDataState : DataState= {
    score : 0,
    currentQuestionNumber:-1,
    currentQuiz: null ,
    quiz : []
}
const DataContext = createContext({} as DataContextModal);

export const DataProvider =({children}:any)=>{
    const [quizState,quizDispatch] = useReducer(reducerFunction,initialDataState)
    return (
        <DataContext.Provider value={{quizState,quizDispatch}} >
            {children}
        </DataContext.Provider>
    )
}
export const useData = ()=>{
    return useContext(DataContext);
}