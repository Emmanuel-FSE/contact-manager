import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import LoginPage from "./LoginPage";

function App() {
  const [contacts, setContactList] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContactList(data));
  }, []);
  function handleSubmitRender(data){
    setContactList([...contacts, data]);
  }

  function updateDelete(data){
    const updatedData = contacts.filter((item) => {
      return item.id !== data
    })
    setContactList(updatedData);
  }

  return (
    <div>
      {location.pathname === "/" ? null : <Header />}
      <Routes>
        <Route path="/contactList" element={<ContactList contactData={contacts} deleted={updateDelete} />}/>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/addContact" element={<AddContact passContact={handleSubmitRender} />}/>
      </Routes>
    </div>
  );
}

export default App;
