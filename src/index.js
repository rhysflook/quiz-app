import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { makeServer } from './server';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

makeServer({ environment: "development" })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

