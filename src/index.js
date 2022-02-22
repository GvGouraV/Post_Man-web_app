import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/////////////////////////////
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
/////////////////////////////
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import MainComp from "./container/mainComp"
import { store, persistor } from "./store"
//const store = createStore(
//reducer,
//)
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
     
        <MainComp />
     
    </PersistGate>
  </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
