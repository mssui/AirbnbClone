import axios from "axios";

// Get Requests about Listings
export const fetchCountryAction = id => async dispatch => {
  dispatch({ type: "COUNTRY_POSTS_LOADING" });
  console.log(id);
  const res = await axios.get(`api/country/${id}`);
  dispatch({
    type: "GET_COUNTRY",
    payload: res.data
  });
};
