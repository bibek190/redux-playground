import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

function IceCreamView() {
  const numofIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{numofIcecream}</h1>
      <button onClick={() => dispatch(ordered())}>order iceCream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecream</button>
    </div>
  );
}

export default IceCreamView;
