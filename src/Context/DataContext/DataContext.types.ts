import React from "react"

export type Option ={
    id:string,
    text:string,
    isRight :boolean,
    isSelected? : boolean,
}
export type Question ={
    id : string,
    question : string,
    image :string | null,
    points :number,
    negativePoints? : number,
    options : Option[]
}
export type User ={
    id : string,
    score:number
}
// type Level = "Easy" | "Medium" | "Hard"
export type Quiz ={
    id : string,
    description : string,
    image : string ,
    totalQuestions : number,
    questions : Question[],
    type : string | null,
    level : any,
}
export type DataState = {
    score : number,
    currentQuestionNumber : number,
    currentQuiz : null | Quiz ,
    quiz : Quiz[]
}
export type Action =
| {
    type : "SELECT_QUIZ",
    payload :{
        quizId:string
    }
} | {
    type : "SELECT_ANSWER",
    payload :{
        questionId:string,
        answerSelected :string
    }
} | {
    type :"NEXT_QUESTION",
} | {
    type:"LOAD_DATA",
    payload:Quiz[]
}

export type DataContextModal = {
    quizState : DataState,
    quizDispatch : React.Dispatch<Action>
}