import AnswerButton from './AnswerButton';
function AnswerGrid(props) {

    return (
        <div>
            <div>
                <AnswerButton answerIndex='0' />
                <AnswerButton answerIndex='1' />
            </div>
            <div>
                <AnswerButton answerIndex='2' />
                <AnswerButton answerIndex='3' />
            </div>
        </div>
    );
}

export default AnswerGrid;