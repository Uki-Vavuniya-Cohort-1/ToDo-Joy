import "./color.css";
import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("white");
  return (
    <div className="color">
      <h1>Color Change</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <div className="buttons">
        <button className="red"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button className="blue"
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button className="green"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
      </div>
      <h2 onClick={() => setColor("white")}>Reset</h2>
    </div>
  );
}
