import {RoutesComponent} from "./RoutesComponent"
import {NavbarComponent} from "./Components"
import {Container} from "react-bootstrap"
import { useEffect } from "react";
import {useData} from "./Context"
import {getQuizData} from "./api/getQuizData"
function App() {
  const {quizDispatch } = useData();
  useEffect(()=>{
    (async()=>{
        const response = await getQuizData();
        if(response.success===true){
          quizDispatch({
            type:"LOAD_DATA",
            payload:response!.Quizdata
          })
        }
        else{
          console.log("Error in loading Data")
        }
    })()
  },[quizDispatch])
  return (
    <div>
      <NavbarComponent />
      <Container >
        <div style={{marginBottom:"1rem"}} >
      <RoutesComponent />
      </div>
    </Container>
    </div>
  );
}

export default App;
