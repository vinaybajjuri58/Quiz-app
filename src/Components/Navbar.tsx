import {Link} from "react-router-dom"
import {Navbar} from "react-bootstrap"
export const NavbarComponent = ()=>{
    return(
         <Navbar bg="dark" variant="dark" >
         <Link to="/"><Navbar.Brand >Finance Quiz</Navbar.Brand></Link>
       </Navbar>
    )
}