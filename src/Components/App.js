import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import AddContact from "./AddContact";

import ContactList from "./ContactList";

function App() {
  const [contacts, setContactList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContactList(data));
  }, []);

  function handleSubmitRender(data){
    setContactList([...contacts, data]);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ContactList contactData={contacts} />} />
        {/* <Route path="/login" element={<Login />}/> */}
        <Route
          path="/addContact"
          element={<AddContact passContact={handleSubmitRender} />}
        />
      </Routes>
    </div>
  );
}

export default App;
