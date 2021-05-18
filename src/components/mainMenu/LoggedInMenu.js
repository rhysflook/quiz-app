import IconButton from './IconButton';

function LoggedInMenu(props) {
    const { fName, lName } = props.user;

    return (
        <div className='question-box'>
            <h1>Welcome {fName} {lName}</h1>
            <IconButton side='left' text='Capitals' icon="fas fa-city" route='capitals'/>
            <IconButton side='right' text='Maths' icon="fas fa-calculator" route='maths'/>
            <IconButton side='left' text='Science' icon="fas fa-atom" route='science'/>
            <IconButton side='right' text='Movie Trivia' icon="fas fa-film" route='movies'/>

        </div>
    );
}

export default LoggedInMenu;