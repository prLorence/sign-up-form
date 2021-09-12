import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    passwordValidation(password1, password2);
    sendData(username, password1, password2);
  }, [password1, password2]); // eslint-disable-line react-hooks/exhaustive-deps

  const passwordValidation = () => {
    if (password1 !== password2) {
      setPasswordStatus(false);
    } else if (password1 === "" || password2 === "") {
      setPasswordStatus(false);
    } else {
      setPasswordStatus(true);
    }
  };

  const sendData = (username, password1, password2) => {
    axios
      .post("https://sign-up-form-backend.herokuapp.com/api/register", {
        id: 1,
        username: username,
        password: password1,
        repeatPassword: password2,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const credentialsValidation = () => {
    !username
      ? setStatus("Please enter a username")
      : setStatus("Sign up successful");

    !passwordStatus
      ? setStatus("Invalid Password")
      : setStatus("Sign up successful");
  };

  const formReset = () => {
    setUsername("");
    setPassword1("");
    setPassword2("");
  };

  const formValidation = () => {
    passwordValidation();
    credentialsValidation();
  };

  return (
    <div className="form-container">
      <form
        className="Sign-up"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          formValidation();
          formReset();
          sendData();
          // postCredentialsInApi();
        }}
      >
        <label htmlFor="username">
          Username
          <input
            className="input"
            type="text"
            id="Username"
            value={username}
            required
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password1">
          Password
          <input
            className="input"
            type="password"
            value={password1}
            required
            onChange={(e) => {
              e.preventDefault();
              setPassword1(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password2">
          Confirm password
          <input
            className="input"
            type="password"
            value={password2}
            required
            onChange={(e) => {
              e.preventDefault();
              setPassword2(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="submit-button">
          {" "}
          Sign Up{" "}
        </button>
        <p className="status"> {status} </p>
        <p className="call-to-action">
          {" "}
          Have an Account?{" "}
          <Link to="/LogIn" className="call-to-action-link">
            {" "}
            Log In{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignUp;
