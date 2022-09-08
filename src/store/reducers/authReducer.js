import {handleActions} from "redux-actions";

import {
  loginAction,
} from 'types/authTypes';

const initialState = {
  isLogined: false,
};

export const authReducer = handleActions({
  [loginAction]: (state, action) => {
    return {
      ...state,
      isLogined: !!action.payload.access_token,
    }
  },
}, initialState);
