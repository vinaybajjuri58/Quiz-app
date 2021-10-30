import {Link} from "react-router-dom"
import {Navbar,Nav,Button} from "react-bootstrap"
export const NavbarComponent = ()=>{
    return(
         <Navbar bg="dark" variant="dark" >
         <Link to="/"><Navbar.Brand >Finance Quiz</Navbar.Brand></Link>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/quiz" ><Button variant="dark" >Quizes</Button></Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
    )
}