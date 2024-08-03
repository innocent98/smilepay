import { PROCESS_ACTION_TYPES } from "./actionTypes";

export const PROCESS_INITIAL_STATE = {
  loading: false,
  data: {},
  error: false,
  errorText: "",
};

export const processReducer = (state, action) => {
  switch (action.type) {
    case PROCESS_ACTION_TYPES.FETCH_START:
      return {
        ...state,
        data: {},
        loading: true,
      };
    case PROCESS_ACTION_TYPES.FETCH_SUCCESS:
      return {
        // ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case PROCESS_ACTION_TYPES.FETCH_ERROR:
      return {
        // ...state,
        loading: false,
        error: true,
        errorText: action.payload,
        data: {},
      };
    default:
      return state;
  }
};
