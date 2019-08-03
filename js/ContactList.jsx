import React from 'react';
import SingleContact from './SingleContact.jsx';


const ContactList = (props) => {

    const contacts = props.contacts.map(contact =>
        <SingleContact
            key={contact.id}
            contact={contact}
            delete={props.delete}
        />
    );


    return (
            <div className="contactList">
                <h2>Lista kontaktów</h2>
                {contacts.length > 0 ? <em>Liczba kontaktów ({contacts.length})</em> : <p>Brak kontaktów</p>}
                {contacts}
            </div>
        )


};

export default ContactList;