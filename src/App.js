import React, { useReducer } from "react";
const initialState = { count: 0 };
const reducerCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Error occured in counter");
  }
};
export default function ReactCounter() {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  return (
    <div>
      <div>
        <h2>{state.count}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
