import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        category: null,
        questions: {},
        results: {},
        score: null,
        quizComplete: false
    },
    reducers: {
        selectAnswer: ({ questions }, { payload: { answer, tab } }) => {
            console.log(answer, tab);
            questions[tab].answerSelected = answer;
            if (tab !== Object.keys(questions).length){
                questions[tab + 1].active = true;
            }
        },

        // activateNextQuestion: (state, { payload }) => {
        //     if (tab !== Object.keys(questions).length){
        //         questions[tab + 1].active = true;
        //     }
        // },

        setCategory: (state, { payload }) => {
            state.category = payload;
        },

        getQuestionSet: (state, { payload }) => {
            state.questions = payload;
        },

        getResultsSet: (state, { payload }) => {
            state.results = payload.results;
            state.score = payload.score;
            state.quizComplete = true
        },

        clearQuestions: state => {state.questions = {}}
    }
});

export const { 
    selectAnswer, getQuestionSet, setCategory, getResultsSet, clearQuestions
 } = questionsSlice.actions;
export default questionsSlice.reducer;

export function getQuestions(route, history) {
    return async dispatch => {
        try {
          const response = await fetch('/api/quiz/' + route)
          const questions = await response.json()
          dispatch(getQuestionSet(questions));
          history.push('/quiz');
        } catch (error) {
          console.log('Could not load questions');
        }
      }
}

export function getResults(category, userAnswers, history) {
    return async dispatch => {

        try {
            const response = await fetch('/api/answers', {
                method: 'POST',
                body: JSON.stringify({ category, userAnswers })
        })
            const quizResults = await response.json()
            dispatch(getResultsSet(quizResults));
            history.push('/results')
        } catch (error) {
            console.log(error);
        }
    }
}