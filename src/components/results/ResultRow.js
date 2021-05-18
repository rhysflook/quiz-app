function ResultRow(props) {

    const {question, correct, correctAnswer, answerSelected} = props.row;
    const tdStyle = correct ? {backgroundColor: 'green'} : {backgroundColor: 'red'};
    return (
        <tr>
            <td>{question}</td>
            <td style={tdStyle}>{answerSelected}</td>
            <td>{correctAnswer}</td>
        </tr>
    );
}

export default ResultRow;