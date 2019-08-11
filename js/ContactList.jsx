import React from 'react';
import SingleContact from './SingleContact.jsx';


const ContactList = (props) => {

    const name = props.contacts.filter(contact => contact.name);

    if(name.length >=2 ){
        name.sort((a,b) => {

            a = a.name.toLowerCase();
            b = b.name.toLowerCase();

            if(a < b){
                return - 1
            }
            if(a > b){
                return  1
            }
            return 0
        })
    }

    const contacts = name.map(contact =>
        <SingleContact
            key={contact.id}
            contact={contact}
            delete={props.delete}
        />
    );


    return (
            <div className="contactList">
                    <h2>Lista kontaktów</h2>
                        <div className="contactListData">
                            {contacts.length > 0 ? <em>Liczba kontaktów ({contacts.length})</em> : <p>Brak kontaktów</p>}
                        </div>
                        <div className="contactData">{contacts}</div>
            </div>
        )
    };

export default ContactList;