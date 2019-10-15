import { Reducer } from "redux";
import { ReduxState } from "../../../types";

const initialState = { users: [] };

const usersReducer: Reducer<ReduxState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
