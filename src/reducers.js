import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./slices/userSlice";


const rootReducer = combineReducers({
  // router: connectRouter(history),
  user: userReducer
});

export default rootReducer;