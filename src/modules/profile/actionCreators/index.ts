import { Dispatch } from "redux";
import ProfileActionTypes from "../actionTypes";
import { ReduxState } from "../../../types";

export const fetchProfile = () => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  if (!getState().login.authorized) {
    return;
  }

  dispatch({ type: ProfileActionTypes.FETCH_START });

  try {
    const response = await fetch("https://randomuser.me/api");

    dispatch({
      type: ProfileActionTypes.FETCH_SUCCESS,
      payload: await response.json()
    });
  } catch (error) {
    dispatch({
      type: ProfileActionTypes.FETCH_FAILURE,
      payload: error.message
    });
  }
};

export const clearProfile = () => ({
  type: ProfileActionTypes.CLEAR_PROFILE
});
