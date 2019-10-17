import { Dispatch } from "redux";
import UsersActionTypes from "../actionTypes";

export const fetchUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: UsersActionTypes.FETCH_START });

  try {
    const result = await fetch(" https://randomuser.me/api?results=50");

    dispatch({
      type: UsersActionTypes.FETCH_SUCCESS,
      payload: await result.json()
    });
  } catch (error) {
    dispatch({
      type: UsersActionTypes.FETCH_FAIL,
      payload: error.message
    });
  }
};
