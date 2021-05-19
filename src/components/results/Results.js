import ResultRow from './ResultRow';
import {
    Redirect, useHistory
  } from "react-router-dom";
import './results.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Results(props) {
    const { results, score, quizComplete } = useSelector(state => state.questions);
    const history = useHistory();
    const { loggedIn } = useSelector(state => state.accounts)

    if (!loggedIn) {
        return (
          <Redirect to='/login' />
        );
      }

    if (!quizComplete) {
        return (
            <Redirect to='/quiz' />
          );
    }

    function handleClick() {
        history.push('/quiz')
    }

    return (
        <div className='main-box'>
            <h1 className='main-header'>Capitals Quiz Results</h1>
            <h2 className='sub-header'>You answered {score}/{results.length} correctly to get a score of {score / results.length * 100}%!</h2>
            <div className='table'>
            <table>
             <tbody>
                    <th>
                        Question
                    </th>
                    <th>
                        You Answered
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