import Todo from "./Todo";
import type { RootState } from "../store/store";
import { addText } from "../features/todo/todoSlice";
import { useSelector,useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

const Home = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <form className="w-[500px] mx-auto pt-8 pb-12 bg-blue-200 rounded-lg flex flex-col items-center gap-2">
        <h1 className="text-2xl">Todo App </h1>
        <div className="w-[80%] flex justify-between py-4 gap-2">
          <input
            type="text"
            placeholder="Add todo"
            className="w-[70%] rounded-full pl-4 py-2 outline-none"
            onChange={(e) => dispatch(addText(e.target.value))}
          />
          <button className="w-[30%] bg-blue-400 text-blue-100 rounded-full"
          onClick={() => dispatch(addTodo(todo))}>
            Add todo
          </button>
        </div>
       
      </form>
    </>
  );
}

export default Home
