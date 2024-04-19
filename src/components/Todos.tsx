import Todo from "./Todo";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo} from "../features/todos/todosSlice";
import { useState } from "react";
import { TodoItem } from "../features/todos/todosSlice";

const Todos = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const initialTodoState = {
    id: crypto.randomUUID(),
    text: "",
    finished: false,
  };

  const [todo, setTodo] = useState<TodoItem>(initialTodoState);

  const addTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialTodoState);
  };


  return (
    <>
      <form className="w-[500px] mx-auto pt-8 pb-12 bg-blue-200 rounded-lg flex flex-col items-center gap-2">
        <h1 className="text-2xl">Todo App </h1>
        <div className="w-[80%] flex justify-between py-4 gap-2">
          <input
            type="text"
            placeholder="Add todo"
            className="w-[70%] rounded-full pl-4 py-2 outline-none"
            value={todo.text}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, text: e.target.value }))
            }
          />
          <button
            className="w-[30%] bg-blue-400 text-blue-100 rounded-full"
            onClick={(e) => addTodoHandler(e)}
          >
            Add todo
          </button>
        </div>
        {todos.map((el) => (
          <Todo key={el.id} {...el}/>
        ))}
      </form>
    </>
  );
};

export default Todos;
