import * as ActionTypes from '../constants/index';

/**
 * 登陆
 * @param username String
 * @param password String
 */
export const login = (username: string, password: string) => {
    return {
        type: ActionTypes.LOG_IN_USER,
        username,
        password
    }
}

/**
 * 退出
 */
export const logout = () => {
    return {
        type: ActionTypes.LOG_OUT_USER,
    }
}