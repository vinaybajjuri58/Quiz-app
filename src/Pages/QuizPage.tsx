import {useState} from "react";
import {useParams} from "react-router-dom"
import {useData} from "../Context";
import {QuestionCard} from "../Components"
export const QuizPage = ()=>{
    const {quizId} = useParams();
    const {quizState} = useData();
    const quizSelected = quizState.quiz.find(quiz=>quiz.id===quizId);
    const [questionNumber,setQuestionNumber] =useState(0);
    // const [totalQuestion, setTotalQuestions] = useState(0);
    // if(typeof(quizSelected) === ){
    //     setTotalQuestions(quizSelected.totalQuestions)
    // }
    const nextQuestion = ()=>{
        setQuestionNumber(number=>number+1)
    }
    const question=quizSelected?.questions[questionNumber]
    return(
        <div>
            <h2>Total no. of questions {quizSelected?.totalQuestions}</h2>
            { <QuestionCard ques={question} questionSelected={questionNumber} nextQuestion={nextQuestion}  key={question?.id} />}
        </div>
    )
}