import React from 'react';


const SingleContact = (props) => {

    return (
        <div>
            <p>
                <strong>{props.contact.name}</strong>
                <strong>{props.contact.surname}</strong>
                <strong>{props.contact.phone}</strong>
                <strong>{props.contact.email}</strong>
            </p>
        </div>
    )


};

export default SingleContact;