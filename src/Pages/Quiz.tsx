import {Link} from "react-router-dom"
import {useData} from "../Context";
import {Card,Button} from "react-bootstrap"
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
export const Quiz = ()=>{
    return(
        <div style={{
            display:"flex",
            justifyContent:"flex-start",
            margin:"2rem"}} >
            <QuizCard />
        </div>
    )
}
const override = css`
  display: block;
  margin: 0 auto;
  color:gray;
`;
const color="gray"
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
            {quizState.quiz.length===0 && <BounceLoader color={color} loading={quizState.quiz.length===0} css={override} size={150} />}
            { quizState.quiz.length> 0 &&(
                <>
                <h2>Quizzes</h2>
                {quizState.quiz.map((quiz)=>(
                <Card 
                bg='light'
                border='dark'
                text='dark'
                style={{ width: '18rem',margin:"1rem" }} key={quiz.id} >
                    <Card.Body>
                    <Card.Img variant="top" src={quiz.image} />
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
                </Card>)
            )}
            </>
            )}
        </ul>
    )
}


