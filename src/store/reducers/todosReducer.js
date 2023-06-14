const INITIAL_STATE = {
  urrTodo: {},
  todos: [],
};
export function todosReducer(state = INITIAL_STATE, action) {
  var newState = state;
  switch (action.type) {
    case "SET_TODOS":
      return (newState = { ...state, todos: action.todos });

    default:
      return state;
  }

  return newState;
}
