import axios from "axios";

// Booking Requests

export const bookProperty = params => async dispatch => {

  const res = await axios.post(
    `http://localhost:5000/book-this-property`,
    params
  );

  // If user object is empty, push the user to login page
  let msg;
  if (res.status == "200") {
    msg = res.data.message;
  } else {
    msg = "ERROR";
  }
  console.log("success");
  dispatch({
    type: "BOOK_PROPERTY",
    payload: msg
  });
};
