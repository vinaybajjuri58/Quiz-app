import {Link, useParams} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useData} from "../Context"
export const Rules = ()=>{
    const {quizId} = useParams();
    const {quizState} = useData();
    const quizSelected = quizState.quiz.find(quiz=>quiz.id===quizId);
    return(
        <div>
            <h2>Rules for quiz:{quizSelected?.description}</h2>
            <Button variant="outline-secondary"><Link to={`/quiz/${quizId}`} >Play</Link></Button>
        </div>
    )
}