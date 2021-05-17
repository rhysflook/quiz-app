
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { getQuestions } from '../../redux/questionsSlice';
import LoggedinMenu from './LoggedInMenu';
import NotLoggedInMenu from './NotLoggedInMenu';
/**
 * Show buttons to login/signup and start the quiz
 * Only show login/signup button if not logged in 
 * Only show start button if logged in
 */


function Menu(props) {
    const { startQuiz } = useSelector(state => state.questions);
    const { loggedIn, currentAccount } = useSelector(state => state.accounts);
    const history = useHistory();
    const dispatch = useDispatch();  

    if (startQuiz) {
      return (<Redirect to='/quiz' />);
    }

    return (
        <div>
          {loggedIn ?  <LoggedinMenu user={currentAccount} /> : <NotLoggedInMenu />}
        </div>
        
    );
}

export default Menu;