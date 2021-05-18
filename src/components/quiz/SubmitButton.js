import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getResults } from "../../redux/questionsSlice";

function SubmitButton(props) {
    const { questions, category, quizComplete } = useSelector(state => state.questions);
    const history = useHistory();

    const dispatch = useDispatch();
    function sendAnswers() {
        if (quizComplete) {
            history.push('/results')
        } else {
            dispatch(getResults(category, questions, history));
        }
    }

    return (
        <div>
            <button className='answer-button' onClick={sendAnswers}>{quizComplete ? 'Results' : 'Submit Answers'}</button>
        </div>
    );
}

export default SubmitButton;