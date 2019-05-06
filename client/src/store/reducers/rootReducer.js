import authReducer from "./authReducer";
import { combineReducers } from "redux";
import notifyReducer from "./notifyReducer";
import fetchPostReducer from "./fetchPostReducer";
import fetchCountryReducer from "./fetchCountryReducer";
import availabilityReducer from "./availabilityReducer";
import bookingReducer from "./bookingReducer";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  likes: notifyReducer,
  post: fetchPostReducer,
  country: fetchCountryReducer,
  available: availabilityReducer,
  booking: bookingReducer,
  search_results: searchResultsReducer
});

export default rootReducer;
