import React, { useState } from "react";

function AddContact({passContact}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const handleContactSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => passContact(data));

      setFormData({ name: "", email: "", company: "" })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add Contact</h2>
      <form onSubmit={handleContactSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            defaultValue={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            defaultValue={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            className="form-control"
            placeholder="Enter Your company name"
            defaultValue={formData.company}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddContact;
