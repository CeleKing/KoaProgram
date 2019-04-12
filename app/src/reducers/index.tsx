import { StoreState } from '../types';
import { LogAction} from '../actions'
import * as ActionTypes from '../constants/index'

export default function logReducer(state: StoreState, action: LogAction): StoreState {
    switch (action.type) {
        case ActionTypes.LOG_IN_USER:
            console.log({...state, ...action.payload})
            return {...state, ...action.payload}
        case ActionTypes.LOG_OUT_USER:
            return {...state, ...{user: 'str', password: 'str'}}
        default:
            return state
    }
}