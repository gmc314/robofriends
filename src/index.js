import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import { robots } from './components/robots'
import reportWebVitals from './reportWebVitals';
import 'tachyons'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card name={ robots[0].name } email={ robots[0].email } id={ robots[0].id }/> 
      <Card name={ robots[1].name } email={ robots[1].email } id={ robots[1].id }/> 
      <Card name={ robots[2].name } email={ robots[2].email } id={ robots[2].id }/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
