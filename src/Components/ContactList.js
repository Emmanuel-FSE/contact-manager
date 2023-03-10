import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const ContactList = ({ contactData, deleted }) => {
  const [contacts, setContacts] = useState(contactData);

  useEffect(() => {
    setContacts(contactData);
  }, [contactData]);
  function handleSearch(search) {
    const searchedPersons = contactData.filter((person) => {
      if (search !== "") {
        return (
          person.name.toLowerCase().includes(search.toLowerCase()) ||
          person.email
            .toLowerCase()
            .includes(search.toLowerCase().includes(search.toLowerCase()))
        );
      } else {
        return true;
      }
    });
    setContacts(searchedPersons);
  }

  function handleDelete(e) {
    let id = e.target.id;
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deleted(id));
  }

  const contactDiv = contacts.map((contact) => {
    return (
      <div className="card col-sm-6 col-md-4 col-lg-2 ms-4" key={contact.id}>
        <img className="card-img-top" src={contact.photo} alt={contact.name} />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.company}</p>
        </div>
        <div className="d-flex justify-content-around mb-2">
          <NavLink to={`/edit/${contact.id}`} className="btn btn-outline-dark">
            Edit
          </NavLink>
          <button
            onClick={handleDelete}
            id={contact.id}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      <div className="row gy-3 my-3">{contactDiv}</div>
    </div>
  );
};
export default ContactList;
