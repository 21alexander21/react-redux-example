import { Dispatch } from "redux";
import LoginActionTypes from "../actionTypes";

const FAKE_LOGIN_DELAY = 1000;
const FAKE_USERNAME = "admin";
const FAKE_PASSWORD = "12345";
const FAKE_ERROR_MESSAGE = "Неверный логин или палроль";
export const STORAGE_KEY = "USER_IS_REMEMBERED";

const remember = () => {
  if (localStorage) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(true));
  }
};

const fakeLogin = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === FAKE_USERNAME && password === FAKE_PASSWORD) {
        resolve();
      } else {
        reject(new Error(FAKE_ERROR_MESSAGE));
      }
    }, FAKE_LOGIN_DELAY);
  });

const isNeedToLogin = () => {
  if (!localStorage) {
    return false;
  }

  const userIsRemembered = localStorage.getItem(STORAGE_KEY);

  return !userIsRemembered || !JSON.parse(userIsRemembered);
};

export const login = (
  username: string,
  password: string,
  needToRemember: boolean
) => async (dispatch: Dispatch) => {
  if (!isNeedToLogin) {
    dispatch({
      type: LoginActionTypes.SUCCESS
    });

    return;
  }

  dispatch({
    type: LoginActionTypes.START
  });

  try {
    await fakeLogin(username, password);

    if (needToRemember) {
      remember();
    }

    dispatch({
      type: LoginActionTypes.SUCCESS
    });
  } catch (error) {
    dispatch({
      type: LoginActionTypes.FAILURE,
      payload: error.message
    });
  }
};

export const logout = () => {
  if (localStorage) {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { type: LoginActionTypes.LOGOUT };
};
