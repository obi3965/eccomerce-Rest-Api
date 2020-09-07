import { authConstants, userConstants } from "./constants";
import Axios from "../helpers/axios";

//SIGNUP
export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await Axios.post("/admin/signup", {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;

      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
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
