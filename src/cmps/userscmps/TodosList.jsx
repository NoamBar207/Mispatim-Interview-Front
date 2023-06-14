import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/actions/todos.action";
import { TodoPrev } from "./TodoPrev";
import { PaginationCmp } from "../utilcmps/PaginationCmp";

export function TodosList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosModule);
  const { currUser } = useSelector((state) => state.userModule);
  const [todosToRender, setTodosToRender] = useState(todos.slice(0, 20));

  useEffect(() => {
    getTodosData();
  }, [currUser]);

  const getTodosData = async () => {
    const data = await dispatch(getTodos(currUser.id));
    setTodosToRender(data.slice(0, 20));
  };

  return (
    <section className="todos-list-container">
      <div className="list-container">
        {todosToRender.map((todo) => {
          return <TodoPrev todo={todo} key={todo.id} />;
        })}
      </div>
      <PaginationCmp
        setRenderItems={setTodosToRender}
        arr={todos}
        itemsPerPage={20}
      />
    </section>
  );
}
