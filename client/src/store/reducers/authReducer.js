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
    // return {
    //   ...state,
    //   posts: action.posts
    // };
    case "LOGIN_USER":
      let logindata = JSON.parse(action.payload.config.data);
      localStorage.setItem("user", logindata.username);

      return {
        ...state,
        user: logindata.username
      };
    default:
      return state;
  }
};
export default authReducer;


