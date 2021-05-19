function ResultRow(props) {

    const {question, correct, correctAnswer, answerSelected} = props.row;
    const tdStyle = correct ? {backgroundColor: '#98bf64'} : {backgroundColor: '#e12120'};
    return (
        <tr>
            <td>{question}</td>
            <td style={tdStyle}>{answerSelected}</td>
        </tr>
    );
}

export default ResultRow;