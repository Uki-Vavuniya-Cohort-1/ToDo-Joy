import "../Pages/about-page.css";
import Navbar from "../Components/Navbar/navbar";

export default function About() {
    return (
      <div>
        <Navbar />
        <h1 style={{ color: "white", textAlign: "center" }}>
          This is About Page
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          asperiores, quibusdam cumque voluptates, fugiat, quos sint
          voluptate officia magnam totam autem doloremque! Cumque
          voluptates, fugiat, quos sint voluptate officia magnam totam
          autem doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          asperiores, quibusdam cumque voluptates, fugiat, quos sint
          voluptate officia magnam totam autem doloremque! Cumque
          voluptates, fugiat, quos sint voluptate officia magnam totam
          autem doloremque!
        </p>
      </div>
    );
}