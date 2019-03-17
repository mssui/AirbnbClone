import axios from "axios";

export const userRegister = params => async dispatch => {
  const res = await axios.post(`http://localhost:5000/auth/register/`, params);
  dispatch({
    type: "REGISTER_USER",
    payload: res
  });
};

export const userLogin = params => async dispatch => {
  const res = await axios.post(`http://localhost:5000/auth/login/`, params);
  dispatch({
    type: "LOGIN_USER",
    payload: res
  });
};
