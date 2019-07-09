const initState = {
  posts: [],
  isLoading: true,
  topdest: [],
  creating: null
};

const fetchPostReducer = (state = initState, action) => {
  switch (action.type) {
    case "POSTS_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoading: false
      };
    case "TOP_DEST":
      return {
        ...state,
        topdest: action.payload
      };
    case "CREATING_POST":
      return {
        ...state,
        creating: true
      };
    case "CREATE_POST":
      return {
        ...state,
        creating: false
      };

    default:
      return state;
  }
};

export default fetchPostReducer;
