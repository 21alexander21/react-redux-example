import { usersReducer } from "../modules/users";
import { combineReducers } from "redux";
import { loginReducer } from "../modules/login";
import { profileReducer } from "../modules/profile";

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
  profile: profileReducer
});

export default rootReducer;
