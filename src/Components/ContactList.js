import React from "react";

const ContactList = ({contactData}) => {
    console.log(contactData)
    const contactDiv = contactData.map((contact) =>{
        return(
           <div className="card col-sm-6 col-md-4 col-lg-2" key={contact.id}>
               <img className="card-img-top" src={contact.photo} alt="Card image cap" />
               <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.company}</p>
               </div>
           </div>)
    })
    return (
    <div className="container">
        <div className="row gy-3 my-3">
            {contactDiv}
        </div>
    </div>       
    );
}
 export default ContactList;