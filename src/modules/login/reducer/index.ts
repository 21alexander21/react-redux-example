import { Reducer } from "redux";
import LoginActionTypes from "../actionTypes";
import { STORAGE_KEY } from "../actionCreators";

const initialState = {
  authorized: localStorage ? localStorage.getItem(STORAGE_KEY) : false,
  error: null,
  loading: false
};

const loginReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.START:
      return {
        ...state,
        authorized: false,
        loading: true,
        error: null
      };

    case LoginActionTypes.SUCCESS:
      return {
        ...state,
        authorized: true,
        loading: false,
        error: null
      };

    case LoginActionTypes.FAILURE:
      return {
        ...state,
        authorized: false,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
