const initState = {
  posts: [],
  postone: []
};

const fetchPostReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload
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
    default:
      return state;
  }
};

export default fetchPostReducer;
