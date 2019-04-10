import { StoreState } from '../types';
import { LogAction} from '../actions'
import * as ActionTypes from '../constants/index'

const initialState = {
    user: 'string',
    password: 'string'
}

export function logReducer(state: StoreState = initialState, action: LogAction): StoreState {
    switch (action.type) {
        case ActionTypes.LOG_IN_USER:
            return {...state, ...action.payload}
        case ActionTypes.LOG_OUT_USER:
            return {...state, ...{user: 'str', password: 'str'}}
        default:
            return state
    }
}