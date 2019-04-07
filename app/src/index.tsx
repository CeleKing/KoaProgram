import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer} from './reducers'

import Hello from './components/Hello'

const rootElement = document.getElementById('root')
const store = createStore(reducer, {compiler: 'Typescript', framework: "React"})

ReactDOM.render(
    <Provider store={store}>
        <Hello compiler="TypeScript" framework="React" />
    </Provider>,
    rootElement
)