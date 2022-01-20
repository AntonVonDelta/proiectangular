import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postsSlice"
import usersReducer from "./slices/usersSlice";
import commentsReducer from "./slices/commentsSlice";

const rootReducer = combineReducers({
  // router: connectRouter(history),
  user: userReducer,
  posts:postReducer,
  users:usersReducer,
  comments:commentsReducer
});

export default rootReducer;