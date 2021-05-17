import { useDispatch } from "react-redux";
import{ getQuestions } from '../../redux/questionsSlice.js';
import IconButton from './IconButton';
import Icon from './Icon';

function LoggedInMenu(props) {
    const { fName, lName } = props.user;
    const dispatch = useDispatch();



    return (
        <div className='question-box'>
            <h1>Welcome {fName}</h1>
            {/* <button onClick={() => handleQuizStart()}>Start Studying</button> */}
            <IconButton side='left' text='Capitals' icon="fas fa-city" route='capitals'/>
            <IconButton side='right' text='Maths' icon="fas fa-calculator" route='maths'/>
            <IconButton side='left' text='Science' icon="fas fa-atom" route='science'/>
            <IconButton side='right' text='Movie Trivia' icon="fas fa-film" route='movies'/>

        </div>
    );
}

export default LoggedInMenu;