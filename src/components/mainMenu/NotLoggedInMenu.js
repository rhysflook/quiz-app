import { useHistory } from "react-router";

function NotLoggedInMenu() {
    const history = useHistory();
    function handleClick() {
        history.push('/login');
    }
    return (
        <div className='question-box'>
            <h1>Please login to access the quizzes.</h1>
            <button className='answer-button' onClick={handleClick}>
                Login
            </button>
        </div>
    );
}

export default NotLoggedInMenu;