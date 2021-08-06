// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/LogIn" />} />
          <Route>
            <LogIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
