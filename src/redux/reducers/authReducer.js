import { authMe, loginUser, logoutUser } from "../../api/api";
import { stopSubmit } from "redux-form";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: "SET-USER-DATA",
  data: { userId, email, login },
  isAuth,
});

export const setUser = () => {
  return (dispatch) => {
    return authMe().then((response) => {
      let { id = null, email = null, login = null } = response.data.data;
      response.data.resultCode === 0
        ? dispatch(setUserData(id, email, login, true))
        : dispatch(setUserData(id, email, login, false));
    });
  };
};
export const login = (value) => {
  return (dispatch) => {
    loginUser(value).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUser());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    logoutUser().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUser());
      }
    });
  };
};

export default authReducer;
