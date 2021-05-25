import {useState} from "react";
import {useParams} from "react-router-dom"
import {useData,Types} from "../Context";
export const QuizPage = ()=>{
    const {quizId} = useParams();
    const {quizState} = useData();
    const quizSelected = quizState.quiz.find(quiz=>quiz._id===quizId);
    const [questionNumber,setQuestionNumber] =useState(0);
    const nextQuestion = ()=>{
        setQuestionNumber(number=>number+1)
    } 
    const question=quizSelected?.questions[questionNumber]
    return(
        <div>
            <h2>Total no. of questions {quizSelected?.totalQuestions}</h2>
            { <QuestionCard ques={question} questionSelected={questionNumber} nextQuestion={nextQuestion}  key={question?._id} />}
        </div>
    )
}
type PropsType ={
    ques : Types.Question | undefined ,
    questionSelected:number,
    nextQuestion : any
}
const QuestionCard = ({ques,questionSelected,nextQuestion}: PropsType)=>{
    return(
        <div>
            <p>{ques?.question}</p>
            {ques?.options.map(option=>(
                <button key={option._id} >{option.text}</button>
                
            ))}
                <button onClick={()=>nextQuestion()} >Next Question</button>
        </div>
    )
}