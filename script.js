// Import MongoDB
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://jamesjoy2k24:j2002o3y12jr@cluster0.i0rspno.mongodb.net/To-Do?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB in async function
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Successfully Connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

// Connect to Express
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

// App Listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Import Models
const User = require("./Models/User.Model");
const Note = require("./Models/Note.Model");

// Create note
app.post("/note/create", async (req, res) => {
  const note = new Note({
    note_id: req.body.note_id,
    date: req.body.date,
    title: req.body.title,
    creator: req.body.creator,
    time: req.body.time,
    content: req.body.content,
    timeline: req.body.timeline,
    deadline: req.body.deadline,
  });
  try {
    const savedNote = await note.save();
    res.send(savedNote);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Note
app.get("/note/get", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update note creator name
app.put("/note/update/:note_id", async (req, res) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { note_id: req.params.note_id },
      { creator: req.body.creator },
      { new: true }
    );
    res.send(updatedNote);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete note using id
app.delete("/note/delete/:note_id", async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({
      note_id: req.params.note_id,
    });
    res.send(deletedNote);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Create User
app.post("/user/create", async (req, res) => {
  const user = new User({
    user_id: req.body.user_id,
    name: req.body.name,
    role: req.body.role,
    note: req.body.note,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get User
app.get("/user/get", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update user name
app.put("/user/update/:user_id", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { user_id: req.params.user_id },
      { name: req.body.name },
      { note: req.body.note },
      { new: true }
    );
    res.send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete user using id
app.delete("/user/delete/:user_id", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      user_id: req.params.user_id,
    });
    res.send(deletedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});


// show user 1 notes's title only
app.get("/user/1/notes", async (req, res) => {
  try {
    const user1Notes = await User.findOne({ user_id: 1 }).select("note");
    const notesTitle = user1Notes.note.map((note) => note.title);
    res.send(notesTitle);
  } catch (error) {
    res.status(400).send(error);
  }
});