import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postsSlice"

const rootReducer = combineReducers({
  // router: connectRouter(history),
  user: userReducer,
  posts:postReducer
});

export default rootReducer;