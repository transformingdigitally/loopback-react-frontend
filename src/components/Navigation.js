import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import { ReactComponent as HeaderLogo } from "../../src/pw-logo-header (1).svg";

function Navigation() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isUserLogin"));
  const userLogOut = () => {
    setIsLogin(false);
    localStorage.removeItem("isUserLogin");
    localStorage.removeItem('user');
  };

  return (
    <BrowserRouter>
      <div className=" navigation-wrapper">
        <Navbar bg="dark" variant="dark" expand="lg" className="">
          <Container>
            <Navbar.Brand href="/" className="header-logo">
              <HeaderLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              {!isLogin && (
                <>
                  <Nav.Link className="signup-btn" as={Link} to="/sign-up">
                    <Button variant="btn btn-primary">Sign Up</Button>
                  </Nav.Link>
                  <Nav.Link className="signin-btn" as={Link} to="/sign-in">
                    <Button variant="btn btn-light">Sign In</Button>
                  </Nav.Link>
                </>
              )}
              {isLogin && (
                <div className="signin-btn">
                  <Button variant="btn btn-primary" onClick={userLogOut}>
                    Sign Out
                  </Button>
                </div>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container-fluid">
        <Routes>
          <Route path="/role-1" element={<About />} />
          <Route path="/role-2" element={<Contact />} />
          <Route path="/role-0" element={<Home />} />
          {/* <Route path="/" element={<SignIn />} /> */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Navigation;
