import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./EnyeReducer";
import { EnyeProvider } from "./EnyeProvider";

ReactDOM.render(
  <React.StrictMode>
    <EnyeProvider reducer={reducer} initialState={initialState}>
      <App />
    </EnyeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
