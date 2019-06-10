const initState = {
  posts: [],
  postone: {},
  isLoading: true,
  topdest: []
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
    case "GET_APARTMENT_DETAIL":
      return {
        ...state,
        postone: action.payload
      };

    case "CREATE_POST":
      return state;

    default:
      return state;
  }
};

export default fetchPostReducer;
