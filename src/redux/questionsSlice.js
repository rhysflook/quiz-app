import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        startQuiz: false,
        category: null,
        questions: {},
        results: {},
        score: null,
        showResults: false
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
            state.startQuiz = true;
        },

        getResultsSet: (state, { payload }) => {
            console.log(payload)
            state.results = payload.results;
            state.score = payload.score;
            state.showResults = true;
        },

        showResultWindow: state => state.showResults = true,

        setShowResultWindowFalse: state => state.showResults = false,

        showQuizWindow: state => {
            state.startQuiz = true;
        },

        setShowQuizFalse: state => {
            state.startQuiz = false;
        },

    }
});

export const { 
    selectAnswer, getQuestionSet, setCategory, getResultsSet, showQuizWindow, setShowQuizFalse, showResultWindow, setShowResultWindowFalse
 } = questionsSlice.actions;
export default questionsSlice.reducer;

export function getQuestions(route) {
    return async dispatch => {
        try {
          const response = await fetch('/api/quiz/' + route)
          const questions = await response.json()
          dispatch(getQuestionSet(questions));
          dispatch(setShowQuizFalse());
        } catch (error) {
          console.log('Could not load questions');
        }
      }
}

export function getResults(category, userAnswers) {
    return async dispatch => {

        try {
            const response = await fetch('/api/answers', {
                method: 'POST',
                body: JSON.stringify({ category, userAnswers })
        })
            const quizResults = await response.json()
            dispatch(getResultsSet(quizResults));
            dispatch(setShowResultWindowFalse());
        } catch (error) {
            console.log(error);
        }
    }
}