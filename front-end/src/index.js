import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render( 
    <Router>
        <Provider store={store} >
            <App />  
        </Provider>
    </Router>
    , document.getElementById("root"));