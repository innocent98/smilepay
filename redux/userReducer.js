import {PROCESS_ACTION_TYPES} from './actionTypes';

export const USER_INITIAL_STATE = {
  user: false,
  loading: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case PROCESS_ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case PROCESS_ACTION_TYPES.FETCH_SUCCESS:
      return {
        loading: false,
        user: true,
      };
    case PROCESS_ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        user: false,
      };
    default:
      return state;
  }
};
