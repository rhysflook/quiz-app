import { createSlice } from '@reduxjs/toolkit';

const userData = sessionStorage;

const initialState = {
    loggedIn: userData.getItem('loggedIn'),
    currentAccount: {
        email: userData.getItem('email'),
        password: userData.getItem('password'),
        fName: userData.getItem('fName'),
        lName: userData.getItem('lName'),
    }
}
console.log(initialState);
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.loggedIn = true;
            state.currentAccount = { ...payload }
        },

        logout: state => {
            state.loggedIn = false;
            state.currentAccount = {}
        }
    }
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;

export function getAccount(email, password) {
    return async dispatch => {
        // dispatch(getRecipes())
        try {
          const response = await fetch('/api/check-account', {
              method: 'POST',
              body: JSON.stringify({ email, password })
          })
          const data = await response.json()
          dispatch(login(data));
        } catch (error) {
          console.log(error);
        }
      }
}

export function CreateAccount(userData) {
    return async dispatch => {
        try {
            const response = await fetch('/api/add-account/', {
                method: 'POST',
                body: JSON.stringify({ ...userData })
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

}