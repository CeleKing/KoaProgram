import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

import { Provider } from 'react-redux';

import Hello from './components/Hello'
import {store} from './store';

const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>,
    rootElement
)