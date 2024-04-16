import "../Pages/contact-page.css";
import Navbar from "../Components/Navbar/navbar";
import Contacts from "../Components/Contact/contact";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center" }}>
        This is Contact Page
      </h1>
      <Contacts />
    </div>
  );
}
