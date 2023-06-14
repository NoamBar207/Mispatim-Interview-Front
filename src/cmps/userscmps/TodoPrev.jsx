export function TodoPrev({ todo }) {
  return (
    <div className="todo-prev">
      <span>{todo.completed ? "✅" : ""}</span>
      <span>{todo.title}</span>
    </div>
  );
}
