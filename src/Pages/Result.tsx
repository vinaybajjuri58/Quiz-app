import { useData} from "../Context";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom"
export const Result = ()=>{
    const {quizState} = useData()
    return(
        <div>
            <h3>You Scored {quizState.score}</h3>
            <Link to="/quiz" ><Button>Try Other quizes</Button></Link>
        </div>
    )
}