import axios from "axios";

// Post Requests for Listings Write a test for this

export const checkAvailability = params => async dispatch => {
  // const res = await axios.post(`http://localhost:5000/addproperty`, params);
  const res = "Available";
  console.log("Checked availability, sending to reducer");
  dispatch({
    type: "CHECK_AVAILABILITY",
    payload: res
  });
};
