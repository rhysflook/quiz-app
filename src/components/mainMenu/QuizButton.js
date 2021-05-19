import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getQuestions, setCategory } from '../../redux/questionsSlice';

function QuizButton(props) {
    const { text, category } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        dispatch(setCategory(category));
        dispatch(getQuestions(category, history));  
    }

    return (
      <div>
            <button onClick={handleClick} className="answer-button">{text}</button>
      </div>
    );
  }
  
  export default QuizButton;