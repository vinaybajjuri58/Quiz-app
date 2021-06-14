import {RoutesComponent} from "./RoutesComponent"
import {NavbarComponent} from "./Components"
import {Container} from "react-bootstrap"
function App() {
  return (
    <div>
      <NavbarComponent />
      <Container>
      <RoutesComponent />
    </Container>
    </div>
  );
}

export default App;
