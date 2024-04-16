import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home-page";
import Note from "./Pages/note-page";
import About from "./Pages/about-page";
import Contact from "./Pages/contact-page";
import Register from "./Pages/register-page";
import List from "./Pages/list";
import Navbar from "./Components/Navbar/navbar";
export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Note" element={<Note />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Lists" element={<List />} />
      </Routes>
      <Navbar />
    </div>
  );
}
