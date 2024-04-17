const Home = () => {
  return (
    <div className="w-[600px] mx-auto pt-8 pb-12 bg-blue-200 rounded-lg flex flex-col items-center gap-4">
      <h1 className="text-2xl ">Todo App </h1>
      <div className="w-[80%] flex justify-between gap-2">
        <input
          type="text"
          placeholder="Add todo"
          className="w-[70%] rounded-full p-2 outline-none"
        />
        <button className="w-[30%] bg-blue-400 text-blue-100 rounded-full">
          Add todo
        </button>
      </div>
    </div>
  );
}

export default Home
