import * as ActionTypes from '../constants';

export interface Login {
    type: ActionTypes.LOG_IN_USER
}

export interface Logout {
    type: ActionTypes.LOG_OUT_USER
}

export type LogAction = Login | Logout;

export function login(): Login {
    return {
        type: ActionTypes.LOG_IN_USER
    }
}

export function logout(): Logout {
    return {
        type: ActionTypes.LOG_OUT_USER
    }
}