import React, { useState } from "react";
import "./App.css";   // ✅ Same CSS file

function Home() {
  const [input, setInput] = useState("");
  const [prediction, setPrediction] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  const handlePredict = async () => {
    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      setPrediction("Error occurred");
    }
  };

  return (
    <div className="container">
      <h1>SPAM MAIL DETECTOR</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here"
        />
        <button onClick={handlePredict}>Predict</button>
      </div>
      <p>Prediction: {prediction}</p>
    </div>
  );
}

export default Home;
