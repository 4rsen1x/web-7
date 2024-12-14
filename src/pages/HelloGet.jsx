// src/HelloGet.js
import React, { useState } from "react";

const HelloGet = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchHello = async () => {
    try {
      const response = await fetch("http://localhost:8080/get");
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
      <h2>GET /hello</h2>
      <p>Message: {message}</p>
      <button onClick={fetchHello}>Fetch Hello Message</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default HelloGet;
