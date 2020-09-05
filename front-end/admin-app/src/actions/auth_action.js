import { authConstants } from "./constants";
import Axios from "../helpers/axios";

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    const res = await Axios.post('/admin/login',{
        ...user
    });
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
