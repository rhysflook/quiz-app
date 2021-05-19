import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../redux/accountSlice';
import { useEffect } from 'react';

const signUp = false;

function Login(props) {
    const { loggedIn, currentAccount, failedLogin } = useSelector(state => state.accounts);
    const dispatch = useDispatch();

    useEffect(() => {
        let { email, password, fName, lName} = currentAccount;
        if (loggedIn) {
            sessionStorage.setItem('loggedIn', true);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
            sessionStorage.setItem('fName', fName);
            sessionStorage.setItem('lName', lName);
        }

    }, [loggedIn, currentAccount]);

    function handleSubmit(e) {
        const email = e.target.email.value;
        const passw = e.target.passw.value;

        dispatch(getAccount(email, passw));
        e.preventDefault();
    }

    if (loggedIn) {
        return (<Redirect to={{ pathname: "/", }}/>);
    }

    return (
        
        <div className='main-box'>
            <h1 className='main-header'>{signUp ? 'Please register a new account' : 'Please enter your login details'} </h1>
            <form onSubmit={handleSubmit}>
                {signUp && <div>
                    <input className='short-input' type='text' name='fName' placeholder='First Name'></input>
                    <input className='short-input' type='text' name='lName' placeholder='Last Name'></input>
                </div>}
                <div>
                    <input className='long-input' type='email' name='email' placeholder='email'></input>
                </div>
                <div>
                    <input className='long-input' type='password' name='passw' placeholder='Password'></input>
                </div>
                <div>
                    {signUp && <input className='long-input' type='password' name='pass-confirm' placeholder='Confirm Password'></input>}
                </div>
                <div>
                    <button className='answer-button regi' type='submit'>{signUp ? 'Sign Up' : 'Login'}</button>
                </div>
                <div>
                    {failedLogin && <h3>Username or password incorrect.</h3>}
                </div>
                
            </form>
        </div>
    );
}

export default Login;