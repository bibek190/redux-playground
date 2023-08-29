import React from "react";
import { ordered, restocked } from "./features/cake/cakeSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.cake.numOfCake);
  const counting = useSelector((state) => state.iceCream.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Cakes</h1>
        <button onClick={() => dispatch(ordered())}>order</button>
      </div>
      <div>
        <h1>Icecream</h1>
        <button onClick={() => dispatch(ordered())}>order</button>
      </div>
    </>
  );
}

export default App;
