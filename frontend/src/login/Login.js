import React, { useState } from "react";
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
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    setForm({
      [name]: value,
    });

    document.getElementById(name).style.fontFamily = "Montserrat black";
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

  return (
    <div className="login">
      <h4>Welcome back</h4>
      <form>
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
      </form>
      <a className="link" href="/signup">
        Sign Up
      </a>
    </div>
  );
}

export default Login;
