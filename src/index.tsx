import {BrowserRouter as Router} from "react-router-dom" ;
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import {DataProvider,AuthProvider} from "./Context"
ReactDOM.render(
  <Router>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
    </Router>,
  document.getElementById('root')
);

