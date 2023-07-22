import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import Scooter from './components/Scooter';
import List from './components/List';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <FavoriteColor/>
    <Car/>
    <Scooter/>
    <List/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
