import axios from "axios";

// Get Requests about Listings
export const fetchPostAction = () => async dispatch => {
  dispatch({ type: "POSTS_LOADING" });
  const res = await axios.get("api/posts");
  dispatch({
    type: "GET_POSTS",
    payload: res.data
  });
  const topdest = await axios.get("api/topdestinations");
  dispatch({
    type: "TOP_DEST",
    payload: topdest.data
  });
};

// Post Requests for Listings Write a test for this

export const createPost = params => async dispatch => {
  dispatch({ type: "CREATING_POST" });
  const res = await axios.post(`api/addproperty`, params);
  const adddata = {
    propertyid: res.data._id,
    start: params.start,
    end: params.end
  };

  await axios.post(`api/addavailability`, adddata);
  dispatch({
    type: "CREATE_POST",
    payload: res
  });
  dispatch({ type: "CREATED_POST" });
};
