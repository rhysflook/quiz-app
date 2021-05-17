import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from '../../redux/questionsSlice';

function AnswerButton(props) {

    const { tab } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    const answerIndex = Number(props.answerIndex);
    const { answerSelected, options } = questions[Number(tab)];
    const isActive = answerSelected === Number(answerIndex) ? true : false;
    function handleClick() {
        dispatch(selectAnswer({answerIndex, tab: Number(tab)}));
    }

    return (
        <button 
            className={isActive ? 'answer-button active' : 'answer-button'}
            onClick={handleClick}
        >{options[Number(answerIndex)]}
        </button>
    );
}

export default AnswerButton;