import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterSlice from "../redux/counterSlice";
import { RootState } from "../redux/store";

const Counter: React.FC = () => {
  const { increment, decrement } = counterSlice.actions;

  const count = useSelector<RootState, number>((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}> INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      </div>
    </div>
  );
};

export default Counter;
