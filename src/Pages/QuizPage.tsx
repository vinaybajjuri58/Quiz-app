import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { useData} from "../Context";
import {QuestionCard} from "../Components"
export const QuizPage = ()=>{
    const navigate = useNavigate()
    const {quizState,quizDispatch} = useData();
    const {currentQuiz,currentQuestionNumber} = quizState
    const [totalQuestions, setTotalQuestions] = useState(0);
    useEffect(()=>{
        if(currentQuiz===null){
            navigate("/")
        }
        else{
            setTotalQuestions(currentQuiz.totalQuestions)
        }
    },[navigate,setTotalQuestions,currentQuiz])
    const nextQuestion = ()=>{
        if(currentQuestionNumber+1===currentQuiz?.totalQuestions){
            navigate("/result")
        }
        else{
            quizDispatch({
                type:"NEXT_QUESTION"
            })
        }
    }
    const question=currentQuiz?.questions[currentQuestionNumber]
    return(
        <div>
            <h2>Total no. of questions {totalQuestions}</h2>
            { <QuestionCard ques={question} questionSelected={currentQuestionNumber} nextQuestion={nextQuestion}  key={question?.id} />}
        </div>
    )
}