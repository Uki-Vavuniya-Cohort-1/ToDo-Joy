import React, { useState } from "react";
import "../Pages/note-page.css";
import Navbar from "../Components/Navbar/navbar";
// import Note from "../Components/Note/note";
// import Notef from "../Components/Notef/notef";
export default function NotePage() {
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [name, setName] = useState("");

  const output = (e) => {
    e.preventDefault();
    console.log(ID);
    console.log(title);
    console.log(description);
    console.log(date);
    console.log(deadline);
    console.log(name);
  };

  return (
    <div>
      <Navbar />
      {/* <div className="note">
        <Note
          className="head"
          ID_head="ID"
          head_head="Head"
          create_head="Create"
          date_head="Date"
          deadline_head="Deadline"
          description_head="Description"
          edit_head="Edit"
          delete_head="Delete"
          ID="1"
          head="Note 1"
          create="12/12/2022"
          date="12/12/2022"
          deadline="12/12/2022"
          description="Note 1 description"
          edit="Edit"
          delete="Delete"
        />
      </div> */}
      <form onSubmit={output}>
        <label>
          ID
          <input
            type="text"
            id="text"
            placeholder="Enter Note ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </label>

        <label>
          Title
          <input
            type="text"
            id="title"
            placeholder="Enter Note Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            id="description"
            placeholder="Enter Note Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          Date
          <input
            type="text"
            id="date"
            placeholder="Enter Note Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>

        <label>
          Deadline
          <input
            type="text"
            id="deadline"
            placeholder="Enter Note Deadline"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
          />
        </label>
        <label>
          By
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
