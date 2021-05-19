import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from '../../redux/questionsSlice';

function AnswerButton(props) {

    const { tab } = useSelector(state => state.tab);
    const { questions, quizComplete } = useSelector(state => state.questions);

    const { answerSelected, options } = questions[Number(tab)];
    const optionIndex = Number(props.optionIndex);
    const answer = options[optionIndex]
    const dispatch = useDispatch();

    const isActive = options.indexOf(answerSelected) === optionIndex ? true : false;

    function handleClick() {
        dispatch(selectAnswer({answer, tab: Number(tab)}));
    }
    return (
        <div>
            <button 
            className={isActive ? 'answer-button active' : 'answer-button'}
            onClick={handleClick}
            disabled={quizComplete}
            >{answer}
            </button>
        </div>
    );
}

export default AnswerButton;