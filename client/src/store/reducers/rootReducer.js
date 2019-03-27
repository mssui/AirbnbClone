import authReducer from "./authReducer";
import { combineReducers } from "redux";
import notifyReducer from "./notifyReducer";
import fetchPostReducer from "./fetchPostReducer";
import availabilityReducer from "./availabilityReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  likes: notifyReducer,
  post: fetchPostReducer,
  available: availabilityReducer,
  booking: bookingReducer
});

export default rootReducer;
