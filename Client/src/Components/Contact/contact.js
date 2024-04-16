import "./contact.css";
import Image from "../Assets/darknet.jpg";

export default function Contacts() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          purus vitae ante aliquet tincidunt. Aenean ac dapibus libero. In hac
          habitasse platea dictumst. In hac habitasse platea dictumst. Nulla ut
          purus vitae ante aliquet
        </p>
      </div>
          <div className="form">
              <div className="left">
        <div className="name">
          <h3>Name</h3>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="email">
          <h3>Email</h3>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="message">
          <h3>Message</h3>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
      </div>
      <div className="right">
        <img src={Image} alt="darknet" />
      </div>
      </div>
    </div>
  );
}
