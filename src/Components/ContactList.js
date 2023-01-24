import React from "react";

const ContactList = ({ contactData }) => {
  console.log(contactData);
  const contactDiv = contactData.map((contact) => {
    return (
      <div className="card col-sm-6 col-md-4 col-lg-2 mx-1" key={contact.id}>
        <img
          className="card-img-top"
          src={contact.photo}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.company}</p>
        </div>
        <div className="d-flex justify-content-around mb-2">
          <button className="btn btn-outline-dark">Edit</button>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
        <div className="row">
            <div className="row gy-3 my-3 col-11">{contactDiv}</div>
            <div className="mt-5 col-1">
                <div className="">
                    <label>Search</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Enter a search term"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};
export default ContactList;
