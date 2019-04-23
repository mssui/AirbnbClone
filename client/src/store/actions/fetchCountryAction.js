import axios from "axios";

// Get Requests about Listings
export const fetchCountryAction = id => async dispatch => {
  dispatch({ type: "COUNTRY_POSTS_LOADING" });
  console.log(id);
  const res = await axios.get(`http://localhost:5000/countries/${id}`);
  dispatch({
    type: "GET_COUNTRY",
    payload: res.data
  });
};
