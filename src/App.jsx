import { useState } from "react";

import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#00000");
  const generateRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Random color Generator</h1>
      <h2>Current color: {bgColor}</h2>
      <button onClick={generateRandomColor}>Click me</button>
    </div>
  );
}

export default App;
