import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        startQuiz: false,
        questions: {}
    },
    reducers: {
        selectAnswer: (state, action) => {
            const { answerIndex, tab } = action.payload;
            state.questions[tab].answerSelected = answerIndex;
            if (tab !== 10){
                state.questions[tab + 1].active = true;
            }
            return state;
        },

        getQuestionSet: (state, { payload }) => {
            state.startQuiz = true;
            state.questions = payload;
        },
    }
});

export const { selectAnswer, getQuestionSet, resetStartQuiz, resetQuiz } = questionsSlice.actions;
export default questionsSlice.reducer;

export function getQuestions(route) {
    return async dispatch => {
        try {
          const response = await fetch('/api/quiz/' + route)
          const data = await response.json()
    
          dispatch(getQuestionSet(data));
          
        } catch (error) {
          console.log('Could not load questions');
        }
      }
}