import {createStore } from 'redux';
import { LogAction } from './actions'
import logReducer from './reducers'
import { StoreState } from './types';

export const store = createStore<StoreState, LogAction, {}, {}>(logReducer, {user: 'admin', password: "123"})
