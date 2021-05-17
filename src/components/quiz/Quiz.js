import {useState} from 'react';
import {
    Redirect
  } from "react-router-dom";
import Question from './Question';
import AnswerGrid from './AnswerGrid';
import NavButton from './NavButton';
import SubmitButton from './SubmitButton';

import './quiz.css';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, resetStartQuiz } from '../../redux/questionsSlice';

function Quiz(props) {

    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    // dispatch(getQuestions());
    const [testComplete, setTestComplete] = useState(false);

    function checkIfAnswered(questionNum) {
        return questions[questionNum].answerSelected !== null;
    }

    function getScore() {
        const ids = Object.keys(questions);
        const results = ids.map(id =>{
            const questionId = questions[id];
            const {question, correctAnswer, options, answerSelected} = questionId;
            const answerIndex = options.indexOf(correctAnswer);
            if (answerSelected === answerIndex) {
                return {question, correct: true, correctAnswer, userAnswer: correctAnswer};
            } else {
                return {question, correct: false, correctAnswer, userAnswer: options[answerSelected]}
            }
        });
       props.sendResults(results);
       setTestComplete(true);
       
    }

    if (testComplete) {
        return (
            <Redirect
              to={{
                pathname: "/results",
              }}
            />
          );
    }

    return (
        <div className='inner-content'>
            <div className='question-box'>
                <Question />
                <AnswerGrid />
                <div>
                    <NavButton direction={-1} text={'Back'} />
                    <NavButton direction={1} text={'Next'} />
                </div>
                {Object.keys(questions).every(checkIfAnswered) && <SubmitButton func={getScore}/>}
            </div>
            
        </div>
    );
}

export default Quiz;