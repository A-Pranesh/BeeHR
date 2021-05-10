import * as ActionTypes from "../ActionTypes";

export const getUsers = payloadData => ({
    type: ActionTypes.GET_USERS,
    payload: payloadData,
});
export const getUsersSuccess = value => ({
    type: ActionTypes.GET_USERS_SUCCESS,
    value,
});

export const getUsersError = error => ({
    type: ActionTypes.GET_USERS_ERROR,
    error,
});