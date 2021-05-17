import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../redux/accountSlice.js';

function LogoutButton() {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.accounts);
 
    function handleClick() {
        sessionStorage.clear();
        dispatch(logout());
    }

    if (!loggedIn) {
        return (<Redirect to='/' />);
    }

    return (
        <button onClick={handleClick} className='nav-menu-btn'><i className="fas fa-sign-out-alt"></i></button>
    );
}

export default LogoutButton;