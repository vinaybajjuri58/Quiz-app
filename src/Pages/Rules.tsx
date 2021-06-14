import {Link, useParams,useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useData} from "../Context"
import { useEffect } from "react";
export const Rules = ()=>{
    const {quizId} = useParams();
    const {quizState} = useData();
    const quizSelected = quizState.quiz.find(quiz=>quiz.id===quizId);
    const navigate= useNavigate()
    useEffect(()=>{
        if(quizSelected===undefined){
            navigate("/quiz")
        }
    },[navigate,quizSelected])
    return(
        <div>
            <h3>Rules </h3>
            <p>Selected quiz : {quizSelected!.description}</p>
            <p>Total no of questions : {quizSelected!.totalQuestions}</p>
            <p>Each question has 1 point</p>
            <p>No negative Points</p>
            <Link to={`/quiz/${quizId}`}>
                <Button variant="outline-secondary">Play</Button>
            </Link>
        </div>
    )
}