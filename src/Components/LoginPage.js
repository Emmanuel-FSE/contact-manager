import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate();
  

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "" || password === "") {
      setIsActive(!isActive);
    } else {
      console.log("Username: ", username);
      console.log("Password: ", password);
      setTimeout(() => navigate('/contactList'), 2000);
    }
  }
  
  return (
    <div className="container mt-5">
      <div className={isActive ? "alert alert-danger" : "d-none alert alert-danger"}>
        <h3>Please enter your details.</h3>
        <p>They are needed to validate you.</p> 
      </div>
      <div className="bg-dark p-4">
        <h1 className="text-light text-center">Contact Manager</h1>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name."
            name="name"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label>Email address</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Create a password."
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-outline-dark input-block-level form-control mt-3">Login</button>
      </form>
      <div className= "alert alert-success mt-5">
        <h3>Welcome to Contact Manager</h3>
        <p>Login to view your saved data</p> 
      </div>
    </div>
  );
}
export default LoginPage;
