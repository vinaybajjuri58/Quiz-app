import {Route, Routes} from "react-router-dom"
import { QuizPage,Home,Rules,Result } from "./Pages"
export const RoutesComponent = ()=>{
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules/:quizId" element={<Rules />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
    </Routes>
)
}