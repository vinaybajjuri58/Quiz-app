import { useData} from "../Context";
export const Result = ()=>{
    const {quizState} = useData()
    return(
        <div>
            <h2>Result Page{quizState.score}</h2>
        </div>
    )
}