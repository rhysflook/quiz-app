import { useSelector } from 'react-redux';

function Question(props) {
    const { tab } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const { question } = questions[tab];
    return (
            <h1 className='main-header'>{question}</h1>
    )
}

export default Question;
