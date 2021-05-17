import { useHistory } from "react-router";

function NotLoggedInMenu() {
    const history = useHistory();
    function handleClick() {
        history.push('/login');
    }
    return (
        <div>
            <button onClick={handleClick}>
                Login
            </button>
        </div>
    );
}

export default NotLoggedInMenu;