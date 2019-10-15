import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunkMiddleware)
  );

  return store;
};

export default configureStore;
