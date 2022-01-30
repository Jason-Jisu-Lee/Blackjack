import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import md5 from "md5";

function Login() {
  const [form, setForm] = useState({
    username: "username",
    password: "password",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;
    if (target.name === "password") {
      target.type = "password";
      value = md5(event.target.value);
    }
    setForm({
      [name]: value,
    });
    target.style.fontFamily = "Montserrat black";
  };
  const handleFocus = (event) => {
    if (event.target.value === event.target.name) {
      event.target.value = "";
    }
  };
  const handleBlur = (event) => {
    if (event.target.value === "") {
      event.target.value = event.target.name;
    }
  };

  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    history.push(`/play`);
  };

  return (
    <div className="login">
      <h4>Welcome, Player</h4>
      <form onSubmit={submitHandler}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={form.username}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={form.password}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text_input"
          />
        </div>
        <button type="submit" className="btn">
          Log In
        </button>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default Login;
