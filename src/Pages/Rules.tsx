import {Link, useParams} from "react-router-dom"
import {useData} from "../Context"
export const Rules = ()=>{
    const {quizId} = useParams();
    const {quizState} = useData();
    const quizSelected = quizState.quiz.find(quiz=>quiz._id===quizId);
    return(
        <div>
            <h2>Rules for quiz:{quizSelected?.description}</h2>
            <Link to={`/quiz/${quizId}`} >Play</Link>
        </div>
    )
}