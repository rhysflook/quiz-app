import { createSlice } from '@reduxjs/toolkit';

// const userData = sessionStorage;

// const sessionUserData = {
//     loggedIn: userData.getItem('loggedIn') ,
//     currentAccount: {
//         email: userData.getItem('email'),
//         password: userData.getItem('password'),
//         fName: userData.getItem('fName'),
//         lName: userData.getItem('lName'),
//     }
// }


const accountSlice = createSlice({
    name: 'account',
    initialState: {
        loggedIn: false,
        currentAccount: {},
        failedLogin: false
    },
    reducers: {
        login: (state, { payload }) => {
            state.loggedIn = true;
            state.currentAccount = { ...payload }
        },

        logout: state => {
            state.loggedIn = false;
            state.currentAccount = {}
        },

        showLoginError: state => {
            state.failedLogin = true;
        },

        hideLoginError: state => {
            state.failedLogin = false;
        }
    }
});
export const { login, logout, showLoginError, hideLoginError } = accountSlice.actions;
export default accountSlice.reducer;

export function getAccount(email, password) {
    return async dispatch => {
        dispatch(hideLoginError());
        try {
          const response = await fetch('/api/check-account', {
              method: 'POST',
              body: JSON.stringify({ email, password })
          })
          const userData = await response.json()
          if (!userData) {
                throw new Error('Email Address incorrect');
          } else if (password !== userData.password){
                throw new Error('Password incorrect');
          } else {
              dispatch(login(userData));
          }
        } catch (error) {
          console.log(error);
            dispatch(showLoginError());
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