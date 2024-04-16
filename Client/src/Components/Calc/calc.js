import "./calc.css";
import { useState, useEffect } from "react";

export default function Calc() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 2);
  };

  //useEffect
  const [resorceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resorceType]);

  return (
    <div className="calc">
      <h1>Calculator</h1>
      <div className="btn">
        <button onClick={decrementCount}> - </button>
        <span> {count} </span>
        <button onClick={incrementCount}> + </button>
      </div>

      <div className="output">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <h1>{resorceType}</h1>

        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
}
