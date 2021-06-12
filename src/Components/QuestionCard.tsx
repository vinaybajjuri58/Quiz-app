import {Types} from "../Context"
import {useState} from "react"
import {useData} from "../Context";
import {Card,ListGroup,ListGroupItem,Button} from "react-bootstrap"
type PropsType ={
    ques : Types.Question | undefined ,
    questionSelected:number,
    nextQuestion : any
}
export const QuestionCard = ({ques,questionSelected,nextQuestion}: PropsType)=>{
    const {quizDispatch} = useData()
    const [optionSelected,setOptionSelected] = useState(false)
    const optionChooseHandler =({optionId}:{optionId:string})=>{
        quizDispatch({
            type:"SELECT_ANSWER",
            payload:{
                questionId: ques!.id,
                answerSelected:optionId
            }
        })
        setOptionSelected(true);
    }
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{ques?.question}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
            {ques?.options.map(option=>(
                <ListGroupItem key={option.id}>
                    <Button 
                    disabled={optionSelected}
                    variant = {optionSelected ? (option.isRight ? "success" : "danger") : "light"}
                    onClick={()=>optionChooseHandler({optionId:option.id})} >
                        {option.text}
                    </Button>
                </ListGroupItem>
            ))}
            </ListGroup>
                <Button onClick={()=>nextQuestion()} >Next Question</Button>
        </Card>
    )
}



