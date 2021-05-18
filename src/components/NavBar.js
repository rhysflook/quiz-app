import HomeButton from "./HomeButton.js";
import LogoutButton from './LogoutButton.js'
import QuestionNavBar from './quiz/QuestionNavBar.js';



function NavBar(props) {
    return (
        <nav className='nav-bar-main'>
            <div className='nav-bar-section long'>
                <QuestionNavBar />
            </div>
            <div className='nav-bar-section'>
                <HomeButton />
                <LogoutButton />
            </div>
        </nav>
    );
}

export default NavBar;