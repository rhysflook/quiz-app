import { createSlice } from '@reduxjs/toolkit';

// const currentTab = sessionStorage.getItem('tab');

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tab: 1,
        navBarVisible: false
        // tab: currentTab !== null ? Number(currentTab) : 1
    },
    reducers: {
        increment: (state) => {state.tab += 1},
        decrement: (state) => {state.tab -= 1},
        changeTab: (state, action) => {state.tab = action.payload},
        resetTab: state => {state.tab = 1},
        toggleNavBarOn: state => {state.navBarVisible = true},
        toggleNavBarOff: state => {state.navBarVisible = false}
    }
});

export const { increment, decrement, changeTab, resetTab, toggleNavBarOn, toggleNavBarOff } = tabSlice.actions;
export default tabSlice.reducer;