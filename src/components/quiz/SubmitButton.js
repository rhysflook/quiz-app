function SubmitButton(props) {
    return (
        <div>
            <button onClick={() => props.func()}>Submit Answers</button>
        </div>
    );
}

export default SubmitButton;