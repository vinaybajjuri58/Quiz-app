import {Link} from "react-router-dom"
import {useData} from "../Context";
import {Card,Button} from "react-bootstrap"
export const Quiz = ()=>{
    const {quizState} = useData();
    return(
        <div>
            <h5>Total no of quizes {quizState.quiz.length} </h5>
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
                bg='light'
                border='dark'
                text='dark'
                style={{ width: '18rem' }} key={quiz.id} >
                    <Card.Body>
                        <Card.Title>{quiz.description}</Card.Title>
                        <Card.Text>
                        Total Questions : {quiz.questions.length} <br />
                        Level : {quiz.level}
                        </Card.Text>
                        <Link to={`/rules/${quiz.id}`}>
                            <Button onClick={()=>quizSelectorHandler({quizId:quiz.id})} variant="primary">
                                Play
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
                
            ))}
        </ul>
    )
}


