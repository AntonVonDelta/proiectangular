import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}

