import "./user.css";

export default function User() {
  return (
    <div className="user">
      <h1>Register</h1>
          <form>
            <label>
              First Name
              <input type="text" id="username" placeholder="Enter Username" />
            </label>
            <label>
              Email
              <input type="email" id="email" placeholder="Enter Email" />
            </label>
            <label>
              Password
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                id="c-password"
                placeholder="Confirm Password"
              />
            </label>
          </form>
        <button type="submit">Register</button>
    </div>
  );
}
