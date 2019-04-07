import { StoreState } from '../types';
import * as ActionTypes from '../constants/index'

export default (state: StoreState, action) => {
    switch (action.type) {
        case ActionTypes.LOG_IN_USER:
            return {...state, }
        case ActionTypes.LOG_OUT_USER:
            return {...state}
        default:
            return state
    }
}