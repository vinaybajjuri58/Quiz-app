import React from "react"

export type Option ={
    _id:string,
    text:string,
    isRight :boolean,
    isSelected? : boolean,
}
export type Question ={
    _id : string,
    question : string,
    image :string | null,
    points :number,
    negativePoints? : number,
    options : Option[]
}
export type User ={
    _id : string,
    score:number
}
type Level = "Easy" | "Medium" | "Hard"
export type Quiz ={
    _id : string,
    description : string,
    image : string | null ,
    totalQuestions : number,
    questions : Question[],
    type : string | null,
    level : Level,
}
export type DataState = {
    score : number,
    currentQuestionNumber : number,
    currentQuiz : null | Quiz ,
    quiz : Quiz[]
}
export type Action ={
    type : string,
    payload :string
}

export type DataContextModal = {
    quizState : DataState,
    quizDispatch : React.Dispatch<Action>
}