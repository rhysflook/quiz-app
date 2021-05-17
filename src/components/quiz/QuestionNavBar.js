import { useSelector } from 'react-redux';
import NavItem from './NavItem';

function QuestionNavBar(props) {
    const { questions } = useSelector(state => state.questions);
    const ids = Object.keys(questions);
    
    const navItems = ids.map(id => 
        <NavItem  key={id} id={id}/> 
    );

    return (
        <div>
            <ul className='quiz-nav-bar'>
                {navItems}
            </ul>
        </div>
    );
}

export default QuestionNavBar;