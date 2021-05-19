import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { clearQuizState } from '../../redux/questionsSlice';
import { resetTab } from '../../redux/tabSlice';
import LoggedinMenu from './LoggedInMenu';
import NotLoggedInMenu from './NotLoggedInMenu';
/**
 * Show buttons to login/signup and start the quiz
 * Only show login/signup button if not logged in 
 * Only show start button if logged in
 */


function Menu(props) {
    const { loggedIn, currentAccount } = useSelector(state => state.accounts);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if (location.pathname === '/') {
        dispatch(resetTab());
        dispatch(clearQuizState());
      } 
    })

    if (!loggedIn) {
      return (
        <Redirect to='/login' />
      );
    }

    return (
        <div>
          {loggedIn ?  <LoggedinMenu user={currentAccount} /> : <NotLoggedInMenu />}
        </div>
        
    );
}

export default Menu;