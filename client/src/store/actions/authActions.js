import axios from "axios";

export const userRegister = params => async dispatch => {
  const res = await axios.post(`auth/register/`, params);
  dispatch({
    type: "REGISTER_USER",
    payload: res
  });
};

export const userLogin = params => async dispatch => {
  const res = await axios.post(`auth/login/`, params);
  dispatch({
    type: "LOGIN_USER",
    payload: res
  });
};
