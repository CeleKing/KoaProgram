import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {reducer} from './reducers'
import {store} from './store'

import Hello from './components/Hello'

const rootElement = document.getElementById('root')
// const store = createtore(reducer, {user: 'Typescript', password: "React"})

ReactDOM.render(
    <Provider store={store}>
        <Hello user={store.getState().user} password={store.getState().password} />
    </Provider>,
    rootElement
)