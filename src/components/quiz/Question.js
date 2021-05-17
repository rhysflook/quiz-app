import { useSelector } from 'react-redux';

function Question(props) {
    const { tab } = useSelector(state => state.tab);
    const { questions } = useSelector(state => state.questions);
    const { question } = questions[tab];
    return (
        <div>
            <h1 className='question'>{question}</h1>
        </div>
    )
}

export default Question;
