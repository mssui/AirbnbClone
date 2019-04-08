import axios from "axios";

// Get Requests about Listings
export const fetchPostAction = () => async dispatch => {
  dispatch({ type: "POSTS_LOADING" });
  const res = await axios.get("http://localhost:5000/posts");
  dispatch({
    type: "GET_POSTS",
    payload: res.data
  });
  const topdest = await axios.get("http://localhost:5000/topdestinations");
  dispatch({
    type: "TOP_DEST",
    payload: topdest.data
  });
};

// Post Requests for Listings Write a test for this

export const createPost = params => async dispatch => {
  const res = await axios.post(`http://localhost:5000/addproperty`, params);
  console.log(res.data._id);
  const adddata = {
    propertyid: res.data._id,
    availability: {
      start: params.availability.start,
      end: params.availability.end
    }
  };

  const booking = await axios.post(
    `http://localhost:5000/addavailability`,
    adddata
  );

  console.log(booking);
  dispatch({
    type: "CREATE_POST",
    payload: res
  });
};
