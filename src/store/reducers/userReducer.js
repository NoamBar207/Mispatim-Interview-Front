const INITIAL_STATE = {
  currUser: {},
  users: [],
};
export function userReducer(state = INITIAL_STATE, action) {
  var newState = state;
  var users = state.users;
  switch (action.type) {
    case "SET_USERS":
      return (newState = { ...state, users: action.users });
    case "SET_USER":
      return (newState = { ...state, currUser: { ...action.user } });
    case "SAVE_USER":
      users = state.users.map((user) =>
        user._id === action.user._id ? { ...action.user } : user
      );
      return (newState = { ...state, users });
    default:
      return state;
  }

  return newState;
}
