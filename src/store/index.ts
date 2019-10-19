import { createStore, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import { ReduxState } from "../types";

const configureStore = (): Store<ReduxState> => {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunkMiddleware)
  );

  return store;
};

export default configureStore;
