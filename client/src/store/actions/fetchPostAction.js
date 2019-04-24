import axios from "axios";

// Get Requests about Listings
export const fetchPostAction = () => async dispatch => {
  dispatch({ type: "POSTS_LOADING" });
  const res = await axios.get("posts");
  dispatch({
    type: "GET_POSTS",
    payload: res.data
  });
  const topdest = await axios.get("topdestinations");
  dispatch({
    type: "TOP_DEST",
    payload: topdest.data
  });
};

// Post Requests for Listings Write a test for this

export const createPost = params => async dispatch => {
  const res = await axios.post(`addproperty`, params);
  const adddata = {
    propertyid: res.data._id,
    availability: {
      start: params.availability.start,
      end: params.availability.end
    }
  };

  await axios.post(`addavailability`, adddata);
  dispatch({
    type: "CREATE_POST",
    payload: res
  });
};
