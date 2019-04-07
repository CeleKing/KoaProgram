import {createStore} from 'redux';
import { LogAction } from './actions'
import {logAction} from './reducers'
import { StoreState } from './types'; 

export const store = createStore<StoreState, LogAction, {}, {}>(logAction, {compiler: 'Typescript', framework: "React"})
