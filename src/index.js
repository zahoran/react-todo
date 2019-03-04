import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import reducer from './store/reducer';

//create store
const store = createStore(reducer);

//sample github project url for github component as a config.
axios.defaults.baseURL = 'https://api.github.com/repos/facebook/create-react-app/issues';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
