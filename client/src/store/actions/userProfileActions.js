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

export const fetchFavs = userId => async dispatch => {
  dispatch({ type: "USER_FAVS_LOADING" });
  const res = await axios.get(`user/favs/${userId}`);
  dispatch({
    type: "GET_USER_FAVS",
    payload: res.data
  });
};

// POST REQUESTS

export const addToFavs = params => async dispatch => {
  const res = await axios.post(`user/addtofavourites`, params);
  let payloadFav;
  if (res.status == "200") {
    payloadFav = params.post;
  } else {
    payloadFav = "ERROR";
  }
  dispatch({
    type: "POST_TO_FAVOURITES",
    payload: payloadFav
  });
};

export const removeFromFavs = params => async dispatch => {
  const res = await axios.post(`user/removefavourite`, params);
  let payloadFav;
  if (res.status == "200") {
    payloadFav = params.post;
  } else {
    payloadFav = "ERROR";
  }
  dispatch({
    type: "REMOVE_FAVOURITE_POST",
    payload: payloadFav
  });
};
