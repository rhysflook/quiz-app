function ResultRow(props) {

    const {question, correct, correctAnswer, userAnswer} = props.row;
    const tdStyle = correct ? {backgroundColor: 'green'} : {backgroundColor: 'red'};
    return (
        <tr>
            <td>{question}</td>
            <td style={tdStyle}>{userAnswer}</td>
            <td>{correctAnswer}</td>
        </tr>
    );
}

export default ResultRow;