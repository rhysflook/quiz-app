import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getResults } from "../../redux/questionsSlice";

function SubmitButton(props) {
    const { questions, category, showResults } = useSelector(state => state.questions);

    const dispatch = useDispatch();
    function sendAnswers() {
        dispatch(getResults(category, questions));
    }

    return (
        <div>
            <button onClick={sendAnswers}>Submit Answers</button>
        </div>
    );
}

export default SubmitButton;