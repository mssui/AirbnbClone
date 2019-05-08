const initState = {
  user: "",
  statusMsg: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      let strdata = JSON.parse(action.payload.config.data);
      localStorage.setItem("user", strdata.username);

      return {
        ...state,
        user: strdata.username,
        statusMsg: action.payload.data.message
      };

    case "LOGIN_USER":
      let logindata = JSON.parse(action.payload.config.data);
      localStorage.setItem("user", logindata.username);

      return {
        ...state,
        user: logindata.username
      };
    case "LOGOUT_USER":
      localStorage.setItem("user", null);

      var test = localStorage.getItem("user");

      console.log("Auth reducerda localstroge:", test);
      return {
        ...state,
        user: ""
      };
    default:
      return state;
  }
};
export default authReducer;
