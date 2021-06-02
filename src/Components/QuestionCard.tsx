import {Types} from "../Context"
type PropsType ={
    ques : Types.Question | undefined ,
    questionSelected:number,
    nextQuestion : any
}
export const QuestionCard = ({ques,questionSelected,nextQuestion}: PropsType)=>{
    return(
        <div>
            <p>{ques?.question}</p>
            {ques?.options.map(option=>(
                <button key={option.id} >{option.text}</button>
                
            ))}
                <button onClick={()=>nextQuestion()} >Next Question</button>
        </div>
    )
}