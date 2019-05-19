import axios from "axios";

// Get Search Results for Posts
export const searchResultsAction = data => async dispatch => {
  dispatch({ type: "SEARCH_RESULTS_LOADING" });

  console.log(data);
  const res = await axios.get(`api/search${data}`);
  dispatch({
    type: "SEARCH_RESULTS",
    payload: res.data
  });
};
