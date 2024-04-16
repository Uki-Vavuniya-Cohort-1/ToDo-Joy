/*const axios = require("axios");

axios
  .get("https://www.boredapi.com/api/activity")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });*/

import React, { useState, useEffect } from "react";

export default function Hooks() {
  /*const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };*/

  //UseEffect
  const [resorceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resorceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resorceType}</h1>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
