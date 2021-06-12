import {Link} from "react-router-dom"
import {useData} from "../Context";
import {Card,Button} from "react-bootstrap"
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
                <Card 
                bg='secondary'
                border='dark'
                text='white'
                style={{ width: '18rem' }} key={quiz.id} >
                    <Card.Body>
                        <Card.Title>{quiz.description}</Card.Title>
                        <Card.Text>
                        Total Questions : {quiz.questions.length} <br />
                        Level : {quiz.level}
                        </Card.Text>
                        <Button onClick={()=>quizSelectorHandler({quizId:quiz.id})} variant="light">
                            <Link to={`/rules/${quiz.id}`}>Play</Link>
                        </Button>
                    </Card.Body>
                </Card>
                
            ))}
        </ul>
    )
}


