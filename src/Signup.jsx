import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import emailLogo from "./assets/email.png";
import passwordLogo from "./assets/password.png";
import nameLogo from "./assets/name.png";
import { Link } from "react-router-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "underline",
    color: "seagreen",
  };
  return (
    <div id="signup">
      <div className="row justify-content-center">
        <div className="card shadow m-3" style={{ width: "40rem" }}>
          <h1>Signup</h1>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form align="center" onSubmit={handleSubmit}>
            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={nameLogo} />
              </span>
              <input
                name="name"
                type="name"
                class="form-control"
                placeholder="Your name "
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={emailLogo} />
              </span>
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="Your email address"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={passwordLogo} />
              </span>
              <input
                name="password"
                type="password"
                class="form-control"
                placeholder="Type password"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={passwordLogo} />
              </span>
              <input
                name="password_confirmation"
                type="password"
                class="form-control"
                placeholder="Confirm password"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <Button variant="outline-success" size="sm" type="submit">
              Create account
            </Button>
            <br />

            <br />
            <p>
              Already a user?&nbsp;
              <Link to={`/login`} style={linkStyle}>
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
