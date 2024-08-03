import { PROCESS_ACTION_TYPES } from ".//actionTypes";
import { userRequest } from "./requestMethod";
import {
  loginStart,
  loginSuccess,
  logout,
  updateFailure,
  updateStart,
  updateSuccess,
} from "./userRedux";

console.log(userRequest)

export const login = async (dispatch, url, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post(url, user);
    dispatch(loginSuccess(res.data));
    window.location.reload();
  } catch (err) {
    alert(err.response.data);
    dispatch(loginFailure());
  }
};

export const makeUpdate = async (dispatch, url, inputs) => {
  dispatch(updateStart());
  try {
    const res = await userRequest.put(url, inputs);
    dispatch(updateSuccess(res.data));
    alert("Profile updated successfully.");
    window.location.reload();
  } catch (err) {
    dispatch(updateFailure);
    alert(err.response.data);
  }
};

export const makeGet = async (dispatch, url) => {
  dispatch({ type: PROCESS_ACTION_TYPES.FETCH_START });
  try {
    const res = await userRequest.get(url);
    dispatch({ type: PROCESS_ACTION_TYPES.FETCH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROCESS_ACTION_TYPES.FETCH_ERROR,
      payload: err.response.data,
    });
  }
};

export const makePost = async (dispatch, url, inputs) => {
  dispatch({ type: PROCESS_ACTION_TYPES.FETCH_START });
  try {
    const res = await userRequest.post(url, inputs);
    dispatch({ type: PROCESS_ACTION_TYPES.FETCH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROCESS_ACTION_TYPES.FETCH_ERROR,
      payload: err.response.data,
    });
  }
};

export const makePut = async (dispatch, url, inputs) => {
  dispatch({ type: PROCESS_ACTION_TYPES.FETCH_START });
  try {
    const res = await userRequest.put(url, inputs);
    dispatch({ type: PROCESS_ACTION_TYPES.FETCH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROCESS_ACTION_TYPES.FETCH_ERROR,
      payload: err.response.data,
    });
  }
};

export const userLogout = (dispatch) => {
  dispatch(logout());
};
