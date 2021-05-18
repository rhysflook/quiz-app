import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './server.js';

// centralise redirects to the App component
// centralise handling session storage if possible
//check login password


makeServer({ environment: "development" })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
