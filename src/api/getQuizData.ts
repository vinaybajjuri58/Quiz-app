import axios,{AxiosError} from "axios";
// import { Quiz } from "../Context/DataContext/DataContext.types";
type ErrorMessage = {
  error: String,
  code: Number,
  success:Boolean
};

export const getQuizData = async () => {
  try {
    const response = await axios.get("https://fin-quiz-backend.herokuapp.com/quiz");
      return response.data
  } catch (error) {
      if(axios.isAxiosError(error)){
          const serverError = error as AxiosError<ErrorMessage>;
          if(serverError && serverError.response){
            return serverError.response
          }
      }
      return {
        error:"Something went wrong",
        code:404,
        success:false
      }
  }
};

