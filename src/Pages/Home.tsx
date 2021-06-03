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
    const {quizState,quizDispatch} = useData();
    const quizSelectorHandler=({quizId}:{quizId:string})=>{
        quizDispatch({
            type:"SELECT_QUIZ",
            payload:{
                quizId
            }
        })
    }
    return(
        <ul>
            {quizState.quiz.map((quiz)=>(
                <div key={quiz.id}>
                <button onClick={()=>quizSelectorHandler({quizId:quiz.id})} ><Link to={`/rules/${quiz.id}`}><p>{quiz.description}</p></Link></button>
                <p>Total Questions : {quiz.questions.length}</p>
                <p>Level : {quiz.level}</p>
                </div>
            ))}
        </ul>
    )
}