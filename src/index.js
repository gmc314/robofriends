import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './containers/App';
import searchRobots from './reducers.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons'

const store = configureStore(searchRobots)


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App store={store}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
