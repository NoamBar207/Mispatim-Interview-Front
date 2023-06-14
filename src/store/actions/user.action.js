import { userService } from "../../services/user.service";

export function getUsers() {
  return async (dispatch) => {
    try {
      let usersData = await userService.getUsers();
      await dispatch({
        type: "SET_USERS",
        users: usersData,
      });
    } catch (err) {
      console.log("Cannot SET USER", err);
    }
  };
}

export function setUser(user) {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_USER",
        user,
      });
    } catch (err) {
      console.log("Cannot SET USER", err);
    }
  };
}

export function onUpdateUser(user) {
  return async (dispatch) => {
    try {
      await userService.updateUser(user);
      dispatch({ type: "SAVE_USER", user });
    } catch (err) {
      console.log("cannot update user", err);
    }
  };
}
