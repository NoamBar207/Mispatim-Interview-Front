import { todosService } from "../../services/todos.service";

export function getTodos(userId = null) {
  return async (dispatch) => {
    try {
      let todosData = await todosService.getTodos();
      console.log(todosData);
      todosData = userId
        ? todosData.filter((todo) => todo.userId === userId)
        : todosData;
      await dispatch({
        type: "SET_TODOS",
        todos: todosData,
      });
      return todosData;
    } catch (err) {
      console.log("Cannot SET USER", err);
    }
  };
}
