import {loginAPI} from "api/auth";
import {
  loginAction,
} from 'types/authTypes';

export const login = (name) => (dispatch) => {
  loginAPI(name)
    .then(res => {
      if (res.access_token) {
        dispatch(loginAction(res));
      }
      return res
    })
};
