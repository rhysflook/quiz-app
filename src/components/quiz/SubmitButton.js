import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getResults } from "../../redux/questionsSlice";

function SubmitButton(props) {
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    function sendAnswers() {
        dispatch(getResults(props.route, questions));
    }
    return (
        <div>
            <button onClick={sendAnswers}>Submit Answers</button>
        </div>
    );
}

export default SubmitButton;