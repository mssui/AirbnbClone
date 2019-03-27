const initState = {
  isLoading: true
};

const availabilityReducer = (state = initState, action) => {
  switch (action.type) {
    case "AVAILABILITY_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "CHECK_AVAILABILITY":
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default availabilityReducer;
