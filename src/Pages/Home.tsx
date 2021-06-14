import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
export const Home = ()=>{
    return(
        <div>
         <p>Would you like to test your knowledge on personal finance and Investing</p>
         <p>Here are some of the quizes</p>
         <Link to="/quiz" ><Button>Quizes</Button></Link>
        </div>
    )
}
