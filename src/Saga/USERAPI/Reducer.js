import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../ActionTypes";
import { useReducer } from "react";

const initialState = {
    Weather: {},
  };

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        Payload: action.payload,
        action: action.type,
        userDetails: {},
        Error: null,
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        Payload: {},
        action: action.type,
        userDetails: action.value,
        Error: null,
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        Payload: {},
        action: action.type,
        userDetails: {},
        Error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;
