//Connect Mongoose
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://joy_james:j2002o3y12jr@cluster0.ydyhuwj.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0";

//Connect Mongodb using async function
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB connected Successfully...");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

//Connect Express
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Joy's To-Do Lists!");
});

//import models
const Note = require("./Models/note");

app.post("/todo", async (req, res) => {
  const note = new Note({
    id: req.body.id,
    date: req.body.date,
    title: req.body.title,
    creator: req.body.creator,
    time: req.body.time,
    content: req.body.content,
    timeline: req.body.timeline,
    deadline: req.body.deadline,
  });
  try {
    await note.save();
    res.send(note);
  } catch (error) {
    res.send(error);
  }
});

app.get("/note", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.send(error);
  }
});

