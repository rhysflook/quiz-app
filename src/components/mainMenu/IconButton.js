import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getQuestions, setCategory } from '../../redux/questionsSlice';

function IconButton(props) {
    const { side, text, icon, route } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        dispatch(setCategory(route));
        dispatch(getQuestions(route, history));
        
    }

    return (
      <div>
            <button onClick={handleClick} className="answer-button">
                {side === "left" && text}
                <i className={icon}></i>
                {side === "right" && text}
            </button>
      </div>
    );
  }
  
  export default IconButton;