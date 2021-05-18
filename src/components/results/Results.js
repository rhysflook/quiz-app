import { useState } from 'react';
import ResultRow from './ResultRow';
import {
    Redirect
  } from "react-router-dom";
import './results.css';
import { useSelector, useDispatch } from 'react-redux';
import { showQuizWindow, setShowQuizFalse } from '../../redux/questionsSlice';

function Results(props) {
    const [backToQuiz, setBackToQuiz] = useState(false);
    const { results, score, startQuiz } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(showQuizWindow());
    }

    if (startQuiz) {
        dispatch(setShowQuizFalse());
        return (
            <Redirect
                push to={{
                    pathname: "/quiz",
                }}
          />
        );
    }

    return (
        <div>
            <h1>Capitals Quiz Results</h1>
            <h2>You answered {score}/{results.length} correctly to get a score of {score / results.length * 100}%!</h2>
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
            <button onClick={handleClick}>Back To Quiz</button>
        </div>
    );
}

export default Results;