const initState = {
  posts: [],
  postone: [],
  isLoading: true
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
    // return {
    //   ...state,
    //   posts: action.posts
    // };
    case "GET_ONE":
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
