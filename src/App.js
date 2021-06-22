
import './App.css';
import AccessControl from './Components/AccessControl/AccessControl';
import Permissions from './Components/Permissions/Permissions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
  <Permissions></Permissions>
        </Route>
        <Route path="/accessControl">
        <AccessControl/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
