const initState = {
  searched_posts: [],
  searchLoading: true
};

const searchResultsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_RESULTS_LOADING":
      return {
        ...state,
        searchLoading: true
      };
    case "SEARCH_RESULTS":
      return {
        ...state,
        searched_posts: action.payload,
        searchLoading: false
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
