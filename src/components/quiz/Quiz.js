import Question from './Question';
import AnswerButton from './AnswerButton';
import NavButton from './NavButton';
import SubmitButton from './SubmitButton';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './quiz.css';

function Quiz(props) {
    
    const { loggedIn } = useSelector(state => state.accounts);
    const { questions, doingQuiz } = useSelector(state => state.questions);
    
    function checkIfAnswered(questionNum) {
        return questions[questionNum].answerSelected !== null;
    }

    if (!loggedIn) {
        return (
          <Redirect to='/login' />
        );
      }

    if (!doingQuiz) {
        return (
            <Redirect to='/' />
          );
        }
    

    return (
        <div className='main-box'>
            <Question />
            <div>
                <AnswerButton answerIndex='0' />
                <AnswerButton answerIndex='1' />
                <AnswerButton answerIndex='2' />
                <AnswerButton answerIndex='3' />
            </div>
            <div className='nav-box'>
                <NavButton direction={-1} text={'Back'} />
                <NavButton direction={1} text={'Next'} />
            </div>
            {Object.keys(questions).every(checkIfAnswered) && <SubmitButton />}
        </div>
    );
}

export default Quiz;