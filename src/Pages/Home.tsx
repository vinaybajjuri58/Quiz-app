import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
export const Home = ()=>{
    return(
        <div style={{marginTop:"2rem"}} >
         <h3>Would you like to test your knowledge on personal finance and Investing</h3>
         <h5>Here are some of the quizes</h5>
         <Link to="/quiz" ><Button style={{margin:"1rem"}}>Quizes</Button></Link>
        </div>
    )
}
