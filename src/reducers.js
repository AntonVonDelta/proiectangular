import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postsSlice"
import usersReducer from "./slices/usersSlice";

const rootReducer = combineReducers({
  // router: connectRouter(history),
  user: userReducer,
  posts:postReducer,
  users:usersReducer,
});

export default rootReducer;