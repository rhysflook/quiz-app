import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tab: 1
    },
    reducers: {
        increment: (state) => {state.tab += 1},
        decrement: (state) => {state.tab -= 1},
        changeTab: (state, action) => {state.tab = action.payload},
    }
});

export const { increment, decrement, changeTab } = tabSlice.actions;
export default tabSlice.reducer;