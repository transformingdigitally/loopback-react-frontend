import React, { useState } from "react";
import { ReactComponent as Logo } from "../../src/logo (1).svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
  const [formSubmission, setFormSubmission] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [record, setRecord] = useState([]);

  const handleInput = (event) => {
    // To handle the Input on change on input
    const name = event.target.name; // It will tell you about the name of Input field.
    const value = event.target.value; // It will tell you about the value which you have entered.
    setFormSubmission({ ...formSubmission, [name]: value }); //we need this dynamic data
  };

  //   const handleSubmit = (event) => {
  //     // To handle the form submit
  //     event.preventDefault(); //The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

  //     const newRecord = {
  //       ...formSubmission,
  //       id: new Date().getTime().toString(),
  //     };
  //     setRecord([...record, newRecord]);
  //     setFormSubmission({ ...formSubmission });
  //     // setFormSubmission({ userName: "", phone: "", email: "", address: "" });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:3000/users";
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formSubmission),
      headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, role, password }),
    };
    fetch(url, requestOptions)

    .then((response) =>
    response
      .json()
      .then((data) => ({ status: response.status, body: data })),
  )
  .then((response) => {
    if (response.status === "200" || response.status === 200) {
      toast("User Registred Successfully");
    } else if (response.status === 400) {
      console.log("Bad REquest");
    } else {
    }
  })
  .catch((error) => console.log("Form submit error", error));
  event.target.reset();
  };

  return (
    <>
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-6 text-center text-lg-start">
          <div className="brand-logo"><Logo /></div>
          <h1 className="display-4 fw-bold lh-1 mb-3">Please Sign Up</h1>
          <p className="col-lg-10 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-6">
            <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
                <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={formSubmission.name}
                    className="form-control"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                  />
            <label for="floatingInput">Enter Your Name</label>
          </div>
          <div class="form-floating mb-3">
          <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={formSubmission.email}
                    className="form-control"
                    placeholder="Enter Email Address"
                    autoComplete="off"
                  />
            <label for="floatingInput">Enter Email address</label>
          </div>
          <div class="form-floating mb-3">
            
              <select class="form-select"
                    type="select"
                    name="role"
                    onChange={handleInput}
                    value={formSubmission.role}
                    id=""
                  >
                    <option value="" disabled defaultValue>
                      Choose the Role
                    </option>
            <option value="0">Role 0</option>
            <option value="1">Role 1</option>
            <option value="2">Role 2</option>
          </select>
        </div>

              {/* <div className="row mb-3">
                <div className="col">
                  <label for="role" class="form-label">Choose the Role </label>
                  <select
                    type="select"
                    name="role"
                    onChange={handleInput}
                    value={formSubmission.role}
                    id=""
                  >
                    <option value="" disabled defaultValue>
                      Please Select
                    </option>
                    <option value="00">Role 00</option>
                    <option value="01">Role 02</option>
                    <option value="02">Role 03</option>
                  </select>
                </div>
              </div> */}
              <div class="form-floating mb-3">
            
              <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={formSubmission.password}
                    className="form-control"
                    placeholder="Enter Password"
                    autoComplete="off"
                  />
            <label for="floatingPassword">Password</label>
          </div>

              {/* <div className="row mb-3">
                <div className="col">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={formSubmission.password}
                    className="form-control"
                    placeholder="Enter password"
                    autoComplete="off"
                  />
                </div>
              </div> */}
              <div className="row row-cols-auto">
                
                <div className="row"><div className="col frmbtn"><button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button></div></div>
                <div className="row"><div className="col frmlink">Already registere? <a href="/sign-in" className="link-primary">Sign in Now</a></div></div>
              
              </div>
              
            </form>
            </div>
            <ToastContainer autoClose={5000}  />
      </div>
      
      </div>
      {record.map((currentElement) => {
        console.log("record", record);
        console.log("currentElement", currentElement);
        const { name, email, role, password, id } = currentElement;
        return (
          <td key={id}>
            <tr>{name}</tr>
            <tr>{email}</tr>
            <tr>{role}</tr>
            <tr>{password}</tr>
          </td>
        );
      })}
    </>
  );
};
export default SignUp;
