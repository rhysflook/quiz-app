import { useState } from 'react';
import ResultRow from './ResultRow';
import {
    Redirect
  } from "react-router-dom";
import './results.css';

function Results(props) {
    const [backToQuiz, setBackToQuiz] = useState(false);
    let score = 0;

    for (const answer of props.results) {
        if (answer.correct) {
            score += 5;
        }
    }

    if (backToQuiz) {
        return (
            <Redirect
                to={{
                    pathname: "/quiz",
                }}
          />
        );
    }

    return (
        <div>
            <h1>Capitals Quiz Results</h1>
            <h2>You answered {score/5}/20 correctly to get a score of {score}%!</h2>
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
                
                
                    {props.results.map((result, index) => <ResultRow key={'Question' + index + 1} row={result} />)}
                </tbody>
            </table>
            <button onClick={() => setBackToQuiz(true)}>Back To Quiz</button>
        </div>
    );
}

export default Results;