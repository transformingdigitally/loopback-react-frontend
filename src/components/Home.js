import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function authHeader() {
  // return authorization header with basic auth credentials
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.authdata) {
    return { Authorization: "Basic " + user.authdata };
  } else {
    return {};
  }
}
export function Home() {
  const [posts, setPosts] = useState({ users: [] });

  // useEffect(() => {
  //   const fetchDataLists = async () => {
  //     const { data } = await axios(
  //       "https://jsonplaceholder.typicode.com/posts",
  //     );
  //     setPosts({ blogs: data });
  //     console.log(data);
  //   };
  //   fetchDataLists();
  // }, [setPosts]);
let users=[];
  useEffect(() => {
    const url = "http://127.0.0.1:3000/users";
    const requestOptions = {
      method: "GET",
      headers: authHeader(), //   body: JSON.stringify({ name, email, role, password }),
    };
    fetch(url, requestOptions)

    .then((response) =>
    response
      .json()
      .then((data) => ({ status: response.status, body: data })),
  )
  .then((response) => {
    if (response.status === "200" || response.status === 200) {
      toast("Sign In Successfully");

      setPosts({ users: response.body });
    } else if (response.status === 400) {
      console.log("Bad REquest");
    } else {
    }
  })
  .catch((error) => console.log("Form submit error", error));
  }, [setPosts]);

  return (
    <div>
      <h1 class="text-danger" style={{ textAlign: "center" }}>
        Role 0 Homepage
      </h1>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Users</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {posts.users.map((user) => (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <ToastContainer autoClose={5000} position="top-center"className="toast-container" toastClassName="dark-toast"  />
    </div>
  );
}
