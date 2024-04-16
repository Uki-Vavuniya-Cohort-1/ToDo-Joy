import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/home-page";
// import Note from "./Pages/note-page";
// import About from "./Pages/about-page";
// import Contact from "./Pages/contact-page";
// import Register from "./Pages/register-page";
import Navbar from "./Components/Navbar/navbar";
export default function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:3002/note/get")
      .then((users) => setUser(users.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);

  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/Note" element={<Note />} />
    //   <Route path="/About" element={<About />} />
    //   <Route path="/Contact" element={<Contact />} />
    //   <Route path="/Register" element={<Register />} />
    // </Routes>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
