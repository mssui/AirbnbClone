import axios from "axios";

export const userRegister = params => async dispatch => {
  const res = await axios.post(`auth/signup/`, params);
  dispatch({
    type: "REGISTER_USER",
    payload: res
  });
};

export const userLogin = params => async dispatch => {
  const res = await axios.post(`auth/signin/`, params);
  dispatch({
    type: "LOGIN_USER",
    payload: res
  });
};

export const userLogout = () => async dispatch => {
  console.log("Auth actionda dispatch basladı");
  const res = await axios.get(`auth/logout/`);
  console.log("Logout linkinden gelen response:", res);
  dispatch({
    type: "LOGOUT_USER",
    payload: res
  });
};
