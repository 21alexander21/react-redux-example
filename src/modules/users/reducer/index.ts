import { Reducer } from "redux";
import UsersActionTypes from "../actionTypes";
import { ReduxState } from "../../../types";

const initialState = { items: [], loading: false, error: null };

const usersReducer: Reducer<ReduxState["users"]> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case UsersActionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case UsersActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.results
      };

    default:
      return state;
  }
};

export default usersReducer;
