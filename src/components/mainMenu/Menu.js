import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import LoggedinMenu from './LoggedInMenu';
import NotLoggedInMenu from './NotLoggedInMenu';
/**
 * Show buttons to login/signup and start the quiz
 * Only show login/signup button if not logged in 
 * Only show start button if logged in
 */


function Menu(props) {
    const { loggedIn, currentAccount } = useSelector(state => state.accounts);
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