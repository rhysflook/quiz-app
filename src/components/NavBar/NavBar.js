import HomeButton from "./HomeButton";
import LogoutButton from './LogoutButton'
import QuestionNavBar from './QuestionNavBar';

function NavBar(props) {
    return (
        <nav className='nav-bar-main'>
            <div className='nav-bar-section long'>
                <QuestionNavBar />
            </div>
            <div className='nav-bar-section short'>
                <HomeButton />
                <LogoutButton />

            </div>
        </nav>
    );
}

export default NavBar;