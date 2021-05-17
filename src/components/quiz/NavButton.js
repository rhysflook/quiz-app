import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../../redux/tabSlice.js';

function NavButton(props) {
    const { tab } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const tabNum = Number(tab);
    const {direction, text} = props;
    
    function nextQuestionActive() {
        if (tabNum !== 20) {
            const nextQuestion = tabNum + 1;
            return questions[nextQuestion].active;
        }
    }
    
    function handleClick() {
        const lowerBoundary = tabNum === 1 && direction === -1; 
        const UpperBoundary = tabNum === 20 && direction === 1;
        if (!lowerBoundary && !UpperBoundary) {
            if (nextQuestionActive() && direction === 1) {
                dispatch(increment());
            } else if (direction === -1){
                dispatch(decrement());
            }
        }   
    }

    return (
        <button className='nav-button' onClick={handleClick}>{text}</button>
    );
}

export default NavButton;