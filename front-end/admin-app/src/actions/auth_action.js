import { authConstants } from "./constants";
import Axios from "../helpers/axios";

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await Axios.post("/admin/login", {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }

    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};



export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user")) ;
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "fail to login" },
      });
    }
  };
};

export const signout = () => {
    return async dispatch => {
        localStorage.clear();
        dispatch({
            type: authConstants.LOGOUT_REQUEST
        })
    }
}