import { useSelector, useDispatch } from "react-redux";
import { toggleFinished } from "../features/todo/todoSlice";
import { RootState } from "../store/store";
import { deleteTodo } from "../features/todos/todosSlice";
const Todo = () => {
  const todo = useSelector((state:RootState) => state.todo)
  // const text = useSelector((state: RootState) => state.todo.text);
  const dispatch = useDispatch();
  return (
    <article className="flex w-[80%] justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          onChange={() => dispatch(toggleFinished(true))}
        />
        <p>{todo.text}</p>
      </div>
      <button className="bg-black text-blue-50 rounded-full px-2"
      onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </article>
  );
};

export default Todo;
