import { StoreState } from '../types';
import { LogAction} from '../actions'
import * as ActionTypes from '../constants/index'

const initialState = {
    compiler: 'string',
    framework: 'string'
}

export function logAction(state: StoreState = initialState, action: LogAction): StoreState {
    switch (action.type) {
        case ActionTypes.LOG_IN_USER:
            return {...state, ...{compiler: 'str', framework: 'str'}}
        case ActionTypes.LOG_OUT_USER:
        return {...state, ...{compiler: 'str', framework: 'str'}}
        default:
            return initialState
    }
}