import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import './stylesheets/index.css';
import configureStore from './store.js';
import * as serviceWorker from './serviceWorker';

const componentTree = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(componentTree, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
