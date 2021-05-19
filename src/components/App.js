import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login.js';
import Menu from './mainMenu/Menu.js';
import Quiz from './quiz/Quiz.js';
import Results from './results/Results.js';
import NavBar from './NavBar';
import './App.css';

/**

to-do

Make a quiz application

Multi choice questions with 4 options

Do 20 questions

Can't continue without answering current question

Can view answered questions

results/score shown when complete

Make login page

Make main menu

Make question page
  bar at the top with links to each question (Can only click link to anwsered questions)


**Bonus** (Should do)

    implement router with react router

    Use an api to get data and results

    Use Redux-Toolkit for state management
  
**Plus-Ultra Bonus** (Should also do)
    Implement authentication (Login)

 */

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
