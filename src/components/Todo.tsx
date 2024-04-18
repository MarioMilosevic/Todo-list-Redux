import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todosSlice";

type TodoProps = {
  id: string;
  text: string;
  finished: boolean;
  toggleFinished: (id: string) => void;
};

const Todo = ({ id, text, toggleFinished, finished }: TodoProps) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };
console.log(finished)
  return (
    <article className="flex w-[80%] justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={finished}
          onChange={() => toggleFinished(id)}
        />
        <p>{text}</p>
      </div>
      <button
        className="bg-black text-blue-50 rounded-full px-2"
        onClick={(e) => deleteTodoHandler(e)}
      >
        Delete
      </button>
    </article>
  );
};

export default Todo;
