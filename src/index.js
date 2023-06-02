import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import App from './App';
import breweryReducer from './Reducers/reducer-entries';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleWare(breweryReducer)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);