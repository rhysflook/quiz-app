import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { useEffect } from 'react';
import { toggleNavBarOff, toggleNavBarOn } from "../../redux/tabSlice";
import NavItem from './NavItem';

function QuestionNavBar(props) {
    const { navBarVisible } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const location = useLocation();

    const ids = Object.keys(questions);
    const navItems = ids.map(id => 
        <NavItem  key={id} id={id}/> 
    );
    
    useEffect(() => {
        location.pathname === '/quiz' ? dispatch(toggleNavBarOn()) : dispatch(toggleNavBarOff());        
    })

    return (
        navBarVisible ? 
        (<div>
            <ul className='quiz-nav-bar'>
                {navItems}
            </ul>
        </div>) : null
    );
}

export default QuestionNavBar;