import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import AppRouter from './AppRouter.js';
//import ParamsExample from './ParamsExample.js';
import AuthExample from './AuthExample.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AuthExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
