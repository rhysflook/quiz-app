import Question from './Question';
import AnswerGrid from './AnswerGrid';
import NavButton from './NavButton';
import SubmitButton from './SubmitButton';
import './quiz.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

function Quiz(props) {
    
    const { loggedIn } = useSelector(state => state.accounts);
    const { questions } = useSelector(state => state.questions);

    if (!loggedIn) {
        return (
          <Redirect to='/login' />
        );
      }

    function checkIfAnswered(questionNum) {
        return questions[questionNum].answerSelected !== null;
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
                {Object.keys(questions).every(checkIfAnswered) && <SubmitButton />}
            </div>
            
        </div>
    );
}

export default Quiz;