import Navbar from "../Components/Navbar/navbar";
import Login from "../Components/login/login";
import Data from "../Components/DataShowing.jsx";
// import Calc from "../Components/Calc/calc";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center" }}>This is Home Page</h1>
      <Login />
      <Data className="data" />
      {/* <Calc /> */}
    </div>
  );
}
