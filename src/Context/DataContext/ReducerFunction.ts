import {Action,DataState} from "./DataContext.types"
export const reducerFunction = (state:DataState,action:Action)=>{
    switch (action.type) {
        case "SELECT_QUIZ":
            const quizSelected = state.quiz.find(quiz=>quiz.id===action.payload.quizId);
            return{
                ...state,
                currentQuiz:quizSelected ? quizSelected : null,
                currentQuestionNumber:quizSelected ? 0 :-1,
                score:0
            }
        case "NEXT_QUESTION":
            return{
                ...state,
                currentQuestionNumber : state.currentQuestionNumber+1
            } 
        case "SELECT_ANSWER":
            const questionSelected = state.currentQuiz!.questions.find(question => question.id===action.payload.questionId);
            const optionSelected = questionSelected!.options.find(option=>option.id === action.payload.answerSelected);
            return{
                ...state,
                score : optionSelected!.isRight===true ? state.score+1 : state.score
            } 
        case "LOAD_DATA":
            return {
                ...state,
                quiz:action.payload
            }

        default:
            return {
                ...state
            }
    }
}