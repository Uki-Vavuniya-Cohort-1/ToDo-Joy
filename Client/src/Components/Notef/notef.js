import "./note.css";

export default function Notef() {
  return (
    <form>
      <label>
        ID
        <input type="text" id="text" placeholder="Enter Note ID" />
      </label>

      <label>
        Title
        <input type="text" id="title" placeholder="Enter Note Title" />
      </label>

      <label>
        Description
        <input
          type="text"
          id="description"
          placeholder="Enter Note Description"
        />
      </label>
      <label>
        Date
        <input type="text" id="date" placeholder="Enter Note Date" />
      </label>

      <label>
        Deadline
        <input type="text" id="deadline" placeholder="Enter Note Deadline" />
      </label>
      <label>
        By
        <input type="text" id="name" placeholder="Enter Your Name" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
