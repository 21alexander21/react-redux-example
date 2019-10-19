import { usersReducer } from "../modules/users";
import { combineReducers } from "redux";
import loginReducer from "../modules/login/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer
});

export default rootReducer;
