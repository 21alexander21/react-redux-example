import { usersReducer } from "../modules/users";
import { combineReducers } from "redux";

const rootReducer = combineReducers(usersReducer);

export default rootReducer;
