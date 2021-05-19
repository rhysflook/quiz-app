import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { clearQuizState } from '../../redux/questionsSlice';
import { resetTab } from '../../redux/tabSlice';
import QuizButton from './QuizButton'

function Menu(props) {
    const { loggedIn, currentAccount } = useSelector(state => state.accounts);
    const { fName, lName } = currentAccount;
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if (location.pathname === '/') {
        dispatch(resetTab());
        dispatch(clearQuizState());
      } 
    })

    if (!loggedIn) {
      return (
        <Redirect to='/login' />
      );
    }

    return (
      <div className='main-box'>
          <h1 className='main-header'>Welcome {fName} {lName}</h1>
          <QuizButton text='Capitals' category='capitals'/>
          <QuizButton text='Maths' category='maths'/>
          <QuizButton text='Science' category='science'/>
          <QuizButton text='Movie Trivia' category='movies'/>
      </div>
        
    );
}

export default Menu;