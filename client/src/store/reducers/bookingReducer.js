const initState = {
  msg: ""
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case "BOOK_PROPERTY":
      return {
        ...state,
        msg: action.payload
      };

    default:
      return state;
  }
};

export default bookingReducer;
