import { Reducer } from "redux";
import ProfileActionTypes from "../actionTypes";
import { ReduxState } from "../../../types";

const initialState = { userData: null, loading: false, error: null };

const profileReducer: Reducer<ReduxState["profile"]> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ProfileActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        userData: action.payload.results[0],
        loading: false
      };

    case ProfileActionTypes.FETCH_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ProfileActionTypes.CLEAR_PROFILE:
      return {
        ...state,
        userData: null
      };

    default:
      return state;
  }
};

export default profileReducer;
