const Todo = () => {
  return (
      <article className="flex w-[80%] justify-between">
          <div className="flex gap-2">
          <input type="checkbox" />
          <p>Mario</p>
          </div>
          <button className="bg-black text-blue-50 rounded-full px-2">Delete</button>
    </article>
  )
}

export default Todo
