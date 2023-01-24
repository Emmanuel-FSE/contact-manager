
import '../App.css';
import Header from "./Header"
import AddContact from "./AddContact"

import ContactList from "./ContactList"


function App() {
  
const contacts  = [
  {
    id: "1",
    "name":"Mohamed",
    "email":"mohamed@gamil.com"
  },
  {
    id: "2",
    "name":"Maggie",
    "email":"Maggie@gamil.com"
  }
];

  return (
    <div className='ui containe'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> 
    </div>
   
  );
}

export default App;
