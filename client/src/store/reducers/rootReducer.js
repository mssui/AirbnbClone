import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import notifyReducer from "./notifyReducer";
import fetchPostReducer from "./fetchPostReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  likes: notifyReducer,
  post: fetchPostReducer
});

export default rootReducer;
