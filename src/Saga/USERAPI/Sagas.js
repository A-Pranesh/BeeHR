import {put, takeLatest, call, delay} from "redux-saga/effects";
import { GET_USERS } from "../ActionTypes";
import API from "../../Services/baseApi";
import * as WeatherActions from "./Actions";
import String from "../../Constants/String";

function* getUsersAsync(action) {
  try {
    const response = yield call(API.get, "?results=100", action.payload);
    yield put(WeatherActions.getUsersSuccess(response));
  } catch (error) {
    yield put(WeatherActions.getUsersError(error));
  }
}

export function* getUsers() {
  yield takeLatest(GET_USERS, getUsersAsync);
}