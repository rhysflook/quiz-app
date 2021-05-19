import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login/Login.js';
import Menu from './mainMenu/Menu.js';
import Quiz from './quiz/Quiz.js';
import Results from './results/Results.js';
import NavBar from './NavBar/NavBar';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path='*'>
            <h1>Page not found</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
