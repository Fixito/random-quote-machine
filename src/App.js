import React, { useState } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";

function App() {
  const [color, setColor] = useState("");
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
  ];

  const getRandomColor = (colors) => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    setColor(newColor);
  };

  return (
    <main
      className={`d-flex justify-content-center flex-column align-items-center bg-${color}`}
    >
      <QuoteBox color={color} colors={colors} getRandomColor={getRandomColor} />
    </main>
  );
}

export default App;
