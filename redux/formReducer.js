import { FORM_ACTION_TYPES } from "./actionTypes";

export const FORM_INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  address: "",
  phone_no: "",
  country: "",
  state: "",
  city: "",
  password_confirmation: "",
  profile_picture: "",
  pin: "",
  gender: "",
  date_of_birth: "",
  username: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTION_TYPES.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
