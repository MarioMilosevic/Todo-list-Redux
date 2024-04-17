import Todo from "./Todo";
const Home = () => {
  return (
    <>
      <form className="w-[500px] mx-auto pt-8 pb-12 bg-blue-200 rounded-lg flex flex-col items-center gap-2">
        <h1 className="text-2xl ">Todo App </h1>
        <div className="w-[80%] flex justify-between py-4 gap-2">
          <input
            type="text"
            placeholder="Add todo"
            className="w-[70%] rounded-full pl-4 py-2 outline-none"
          />
          <button className="w-[30%] bg-blue-400 text-blue-100 rounded-full">
            Add todo
          </button>
        </div>
      <Todo />
      <Todo />
      <Todo />
      </form>
    </>
  );
}

export default Home
