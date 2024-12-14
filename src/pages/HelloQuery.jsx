// src/HelloQuery.js
import React, { useState } from "react";

const HelloQuery = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchHello = async () => {
    try {
      const response = await fetch(
        `http://localhost:9000/api/user?name=${name}`
      );
      if (!response.ok) throw new Error("Failed to fetch hello message");
      const data = await response.text();
      setMessage(data);
      setError("");
    } catch (err) {
      console.error("Error fetching hello message:", err);
      setError("Failed to fetch hello message.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>GET /hello with Query Parameter</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={fetchHello}>Fetch Hello Message</button>
      <p>Message: {message}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default HelloQuery;
