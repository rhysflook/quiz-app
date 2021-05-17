import { useDispatch } from 'react-redux';
import { getQuestions } from '../../redux/questionsSlice';
import Icon from './Icon';

function IconButton(props) {
    const { side, text, icon, route } = props;
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(getQuestions(route));
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