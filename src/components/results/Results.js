import ResultRow from './ResultRow';
import {
    Redirect, useHistory
  } from "react-router-dom";
import './results.css';
import { useSelector } from 'react-redux';

function Results(props) {
    const { results, score } = useSelector(state => state.questions);
    const history = useHistory();
    const { loggedIn } = useSelector(state => state.accounts)

    if (!loggedIn) {
        return (
          <Redirect to='/login' />
        );
      }

    function handleClick() {
        history.push('/quiz')
    }

    return (
        <div className='question-box'>
            <h1>Capitals Quiz Results</h1>
            <h2>You answered {score}/{results.length} correctly to get a score of {score / results.length * 100}%!</h2>
            <div className='table'>
            <table>
             <tbody>
                    <th>
                        Question
                    </th>
                    <th>
                        You Answered
                    </th>
                    <th>
                        Correct Answer
                    </th>
                
                
                    {results.map((result, index) => <ResultRow key={'Question' + index + 1} row={result} />)}
                </tbody>
            </table>
            </div>
            <button className='answer-button' onClick={handleClick}>Back To Quiz</button>
        </div>
    );
}

export default Results;