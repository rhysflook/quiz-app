import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from '../../redux/questionsSlice';

function AnswerButton(props) {

    const { tab } = useSelector(state => state.tab);
    const { questions, quizComplete } = useSelector(state => state.questions);
    const { answerSelected, options } = questions[Number(tab)];
    const answerIndex = Number(props.answerIndex);
    const answer = options[Number(answerIndex)]
    const dispatch = useDispatch();

    const isActive = options.indexOf(answerSelected) === Number(answerIndex) ? true : false;

    function handleClick() {
        dispatch(selectAnswer({answer, tab: Number(tab)}));
    }
    console.log(quizComplete)
    return (
        <button 
            className={isActive ? 'answer-button active' : 'answer-button'}
            onClick={handleClick}
            disabled={quizComplete}
        >{answer}
        </button>
    );
}

export default AnswerButton;