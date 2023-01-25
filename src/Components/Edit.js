import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit({ contactData, patched }) {
  let { contactId } = useParams();
  const navigate = useNavigate();

  const oneContact = contactData.filter((item) => {
    return item.id === contactId;
  });

  const [form, setForm] = useState({
    name: oneContact[0].name,
    email: oneContact[0].email,
    company: oneContact[0].company,
    photo: oneContact[0].photo,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/contacts/${contactId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => patched(data.id));
      setTimeout(() => navigate('/contactList'), 2000);
  };

  return (
    <div>
      <div className="card container w-25 mt-5">
        <img className="card-img-top" src={oneContact[0].photo} alt={oneContact[0].name} />
        <div className="card-body">
          <h5 className="card-title">{oneContact[0].name}</h5>
          <p className="card-text">{oneContact[0].email}</p>
          <p className="card-text">{oneContact[0].company}</p>
        </div>
      </div>
      <div className="container mt-3">
        <h2 className="text-center">Add Contact</h2>
        <form onSubmit={handleContactSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name."
              name="name"
              defaultValue={oneContact[0].name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email."
              defaultValue={oneContact[0].email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Enter Your company name."
              defaultValue={oneContact[0].company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Photo</label>
            <input
              type="text"
              name="photo"
              className="form-control"
              placeholder="Enter a photo url to represent the contact."
              defaultValue={oneContact[0].photo}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
