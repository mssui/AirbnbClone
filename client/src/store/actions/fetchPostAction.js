import axios from "axios";

export const fetchPostAction = () => async dispatch => {
  const res = await axios.get("http://localhost:3030/posts");
  dispatch({
    type: "GET_POSTS",
    payload: res.data
  });
};

export const fetchOnePost = id => async dispatch => {
  const res = await axios.get(`http://localhost:3030/apartments/${id}`);
  dispatch({
    type: "GET_ONE",
    payload: res.data
  });
};
