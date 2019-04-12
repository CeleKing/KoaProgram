import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import Hello from './components/Hello'
import {store} from './store';

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <Hello />, 
    </Provider>,
    rootElement
)