import React, { useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import Home from "./Home";
import NotWorking from "./NotWorking";
import { ReactComponent as Logo } from "../../src/logo (1).svg";

const SignIn = () => {
  const [formSubmission, setFormSubmission] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    // To handle the Input on change on input
    const name = event.target.name; // It will tell you about the name of Input field.
    const value = event.target.value; // It will tell you about the value which you have entered.
    setFormSubmission({ ...formSubmission, [name]: value }); //we need this dynamic data
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.parse(JSON.stringify(formSubmission));
    console.log("BODY", body.email);
    const url = "http://127.0.0.1:3000/login";
    console.log(url);
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formSubmission),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${body.email}:${body.password}`),
      },
      //   body: JSON.stringify({ name, email, role, password }),
    };
    fetch(url, requestOptions)
      // .then((response) =>
      //   console.log("Submitted successfully    :   ", response.json()),
      // )
      .then((response) =>
        response
          .json()
          .then((data) => ({ status: response.status, body: data })),
      )

      .then((response) => {
        if (response.status === "200" || response.status === 200) {
          localStorage.setItem("isUserLogin", true);

          if (response.body.role === 0 || response.body.role === "0") {
            let user = response.body;
            user.authdata = window.btoa(`${body.email}:${body.password}`);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/role-0");
          }
          if (response.body.role === 1 || response.body.role === "1") {
            navigate("/role-1");
          }
          if (response.body.role === 2 || response.body.role === "2") {
            navigate("/role-2");
          }
        } else if (response.status === 400) {
          console.log("Bad REquest");
        } else {
        }
      })
      .catch((error) => console.log("Form submit error", error));
  };
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-6 text-center text-lg-start">
          <div className="brand-logo">
            <Logo />
          </div>
          <h1 className="display-4 fw-bold lh-1 mb-3">Please Sign In</h1>
          <p className="col-lg-10 fs-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 border rounded-3 bg-light"
          >
            <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={formSubmission.email}
                className="form-control"
                placeholder="Enter email"
                autoComplete="off"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={formSubmission.password}
                className="form-control"
                placeholder="Enter Password"
                autoComplete="off"
                id="floatingPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-check checkbox mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              ></input>
              <label class="form-check-label" for="flexCheckChecked">
                Remember me
              </label>
            </div>
            <div className="row">
              <div className="col frmbtn">
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Sign In
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col frmlink">
                <a href="#" className="link-primary">
                  Forgot Password?
                </a>
              </div>
            </div>
            <hr class="my-4"></hr>
            <small class="text-muted text-center">
              By clicking Sign in, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
