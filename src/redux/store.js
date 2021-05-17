import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import tabReducer from './tabSlice.js';
import questionsReducer from './questionsSlice.js';
import accountReducer from './accountSlice.js';


export default  configureStore({
    reducer: {    
        tab: tabReducer,
        questions: questionsReducer,
        accounts: accountReducer,
    },
    // middleware: [thunk]
});
