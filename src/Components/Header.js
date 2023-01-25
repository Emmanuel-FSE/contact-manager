import React from "react";
import { NavLink as Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark p-4">
      <h1 className="text-light text-center">Contact Manager</h1>
      <div className="d-flex justify-content-around">
        <Link className="btn btn-warning" to="/contactList">Contact List</Link>
        <Link className="btn btn-warning" to="/addContact">Add Contact</Link>
        <Link className="btn btn-warning" to="/">Login LogOut</Link>
      </div>
    </div>
  );
};
export default Header;
