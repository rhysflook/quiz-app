import { changeTab } from "../../redux/tabSlice";
import { useSelector, useDispatch } from 'react-redux';

function NavItem(props) {
    const { tab } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const id = Number(props.id);
    const { active } = questions[id];
    const isActive = id === Number(tab) ? true : false;
    
    function getButtonClass() {
        if (isActive) {
            return 'nav-item active';
        } else if (!active) {
            console.log('YES');
            return 'nav-item inactive';
        } else {
            return 'nav-item';
        }
    }

    function handleClick() {
        if (active) {
            dispatch(changeTab(id));
        }
        
    }
    return (
        <li className={getButtonClass()} onClick={handleClick}>{id}</li>
    )
}

export default NavItem;
