import * as ActionTypes from '../constants';
import { LogMessage } from '../types';

export interface Login {
    type: ActionTypes.LOG_IN_USER,
    payload: LogMessage
}

export interface Logout {
    type: ActionTypes.LOG_OUT_USER,
}

export type LogAction = Login | Logout;

export function login(message: LogMessage): Login {
    return {
        type: ActionTypes.LOG_IN_USER,
        payload: message
    }
}

export function logout(): Logout {
    return {
        type: ActionTypes.LOG_OUT_USER
    }
}