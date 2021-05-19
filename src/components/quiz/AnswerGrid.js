import AnswerButton from './AnswerButton';
function AnswerGrid(props) {

    return (
        <div>
                <AnswerButton answerIndex='0' />
                <AnswerButton answerIndex='1' />
                <AnswerButton answerIndex='2' />
                <AnswerButton answerIndex='3' />
        </div>
    );
}

export default AnswerGrid;