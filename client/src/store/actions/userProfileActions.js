import axios from "axios";

//GET REQUESTS

// Get Requests for User's Listings
export const fetchPosts = userId => async dispatch => {
  dispatch({ type: "USER_POSTS_LOADING" });
  const res = await axios.get(`user/${userId}`);
  dispatch({
    type: "GET_USER_POSTS",
    payload: res.data
  });
};

// Get Requests for User's Bookings

export const fetchBookings = () => async dispatch => {
  dispatch({ type: "USER_BOOKINGS_LOADING" });
  // const res = await axios.get(`user/bookings/${userId}`);
  dispatch({
    type: "GET_USER_BOOKINGS",
    payload: "Sucsess"
  });
};

// Get Requests for User's favourites

export const fetchFavs = () => async dispatch => {
  dispatch({ type: "USER_FAVS_LOADING" });
  // const res = await axios.get(`user/favs/${userId}`);
  dispatch({
    type: "GET_USER_FAVS",
    payload: "Sucsess"
  });
};

// POST REQUESTS
