const initState = {
  user: "",
  statusMsg: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      localStorage.setItem("user", action.payload.data.id);

      return {
        ...state,
        user: action.payload.data.id,
        statusMsg: action.payload.data.message
      };

    case "LOGIN_USER":
      console.log("Loginden sonra dönen data", action.payload);

      localStorage.setItem("user", action.payload.data.id);

      return {
        ...state,
        user: action.payload.data.id,
        statusMsg: action.payload.data.message
      };
    case "LOGOUT_USER":
      localStorage.setItem("user", false);
      return {
        ...state,
        user: ""
      };
    default:
      return state;
  }
};
export default authReducer;
