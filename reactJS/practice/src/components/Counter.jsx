import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncreament() {
    // count = count +1;
    // setCount(count)
    setCount(() => count + 1);
  }
  const handleDecreament = () => {
    setCount(() => count - 1);
  };

  return (
    <div
      style={{
        height: "500px",
        border: "1px solid red",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Counter : {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={handleIncreament}>Increment By function</button>
      <button onClick={handleDecreament}>Decreament By Function</button>
    </div>
  );
};

export default Counter;
