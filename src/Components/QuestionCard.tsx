import {Types} from "../Context"
import {useData} from "../Context";
type PropsType ={
    ques : Types.Question | undefined ,
    questionSelected:number,
    nextQuestion : any
}
export const QuestionCard = ({ques,questionSelected,nextQuestion}: PropsType)=>{
    const {quizDispatch} = useData()
    const optionChooseHandler =({optionId}:{optionId:string})=>{
        quizDispatch({
            type:"SELECT_ANSWER",
            payload:{
                questionId: ques!.id,
                answerSelected:optionId
            }
        })
        nextQuestion();
    }
    return(
        <div>
            <p>{ques?.question}</p>
            {ques?.options.map(option=>(
                <button onClick={()=>optionChooseHandler({optionId:option.id})}  key={option.id} >{option.text}</button>
                
            ))}
                <button onClick={()=>nextQuestion()} >Next Question</button>
        </div>
    )
}