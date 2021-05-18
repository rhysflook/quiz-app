import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        startQuiz: false,
        category: null,
        questions: {},
        results: {},
    },
    reducers: {
        selectAnswer: (state, action) => {
            const { answerIndex, tab } = action.payload;
            const { questions } = state;
            questions[tab].answerSelected = answerIndex;
            if (tab !== Object.keys(questions).length){
                questions[tab + 1].active = true;
            }
            return state;
        },

        setCategory: (state, { payload }) => {state.category = payload},

        getQuestionSet: (state, { payload }) => {
            state.startQuiz = true;
            state.questions = payload;
        },

        getResultsSet: (state, { payload }) => {
            state.results = payload;
        }

    }
});

export const { selectAnswer, getQuestionSet, setCategory, getResultsSet } = questionsSlice.actions;
export default questionsSlice.reducer;

export function getQuestions(route) {
    return async dispatch => {
        try {
          const response = await fetch('/api/quiz/' + route)
          const questions = await response.json()
          dispatch(getQuestionSet(questions));
          dispatch(setCategory(route));
          
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
            const results = await response.json()
            dispatch(getResultsSet(results));
        } catch (error) {
            console.log(error);
        }
    }
}