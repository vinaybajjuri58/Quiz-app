import {Link} from "react-router-dom"
import {useData} from "../Context";
export const Home = ()=>{
    const {quizState} = useData();
    return(
        <div>
            <h2>Total no of quizes {quizState.quiz.length} </h2>
            <QuizCard />
        </div>
    )
}
const QuizCard = ()=>{
    const {quizState} = useData();
    return(
        <ul>
            {quizState.quiz.map((quiz)=>(
                <div key={quiz._id}>
                <Link to={`/rules/${quiz._id}`}><p>{quiz.description}</p></Link>
                <p>Total Questions : {quiz.questions.length}</p>
                <p>Level : {quiz.level}</p>
                </div>
            ))}
        </ul>
    )
}