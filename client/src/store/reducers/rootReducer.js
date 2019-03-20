import authReducer from "./authReducer";
import { combineReducers } from "redux";
import notifyReducer from "./notifyReducer";
import fetchPostReducer from "./fetchPostReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  likes: notifyReducer,
  post: fetchPostReducer
});

export default rootReducer;
