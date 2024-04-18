import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-300 text-blue-50 flex flex-col mt-20 p-4 rounded-lg w-[500px] mx-auto items-center">
      <span className="pb-4 text-xl">{count}</span>
      <div className="flex gap-4">
        <button
                  className="bg-blue-500 rounded-full p-2 hover:bg-blue-600"
                  onClick={() => dispatch(increment())}
        >
          Increment
        </button>
              <button className="bg-blue-500 rounded-full p-2 hover:bg-blue-600"
              onClick={() => dispatch(decrement())}>
          Decrement
        </button>
              <button className="bg-blue-500 rounded-full p-2 hover:bg-blue-600"
              onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
