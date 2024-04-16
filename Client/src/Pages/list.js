import Navbar from "../Components/Navbar/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/note/get")
      .then((users) => setUser(users.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Content</th>
            <th>Creator</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.date}</td>
              <td>{user.title}</td>
              <td>{user.content}</td>
              <td>{user.creator}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
