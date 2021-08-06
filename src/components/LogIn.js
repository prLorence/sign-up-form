import { Link } from "react-router-dom";
import { useState } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form-container">
      <form
        className="Log-in"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          // authentication();
        }}
      >
        <label htmlFor="username">
          Username
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="password-field">
          Password
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="submit-button">
          {" "}
          Log In{" "}
        </button>
        <p className="call-to-action">
          {" "}
          Not a member yet?{" "}
          <Link to="/SignUp" className="call-to-action-link">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LogIn;
