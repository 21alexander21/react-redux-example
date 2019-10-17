import { usersReducer } from "../modules/users";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ users: usersReducer });

export default rootReducer;
