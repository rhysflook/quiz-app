import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearQuizState } from '../redux/questionsSlice';
import { resetTab } from '../redux/tabSlice';

function HomeButton(props) {
  const history = useHistory();

  function handleClick() {
    history.push('/')
  }

  return (
      
        <button onClick={handleClick} className='nav-menu-btn'><i className="fas fa-home"></i></button>
      
    );
  }

export default HomeButton;