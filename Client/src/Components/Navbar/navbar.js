import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Joy</h1>
      </div>
      <div className="navItems">
        <a href="/">Home</a>
        <a href="/Note">Note</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
}
