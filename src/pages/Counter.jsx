// src/Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const fetchCount = async () => {
    try {
      const response = await fetch("http://localhost:3333/count");
      const data = await response.text();
      setCount(Number(data));
      setError("");
    } catch (err) {
      console.error("Error fetching count:", err);
      setError("Failed to fetch count.");
    }
  };

  const incrementCount = async () => {
    try {
      const response = await fetch("http://localhost:3333/count", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `count=${inputValue}`,
      });
      if (response.status === 400) {
        const errorText = await response.text();
        setError(errorText);
      } else {
        const data = await response.text();
        setCount(Number(data));
        setError("");
      }
    } catch (err) {
      console.error("Error updating count:", err);
      setError("Failed to update count.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={fetchCount}>Get Count</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={incrementCount}>Increment Count</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Counter;
