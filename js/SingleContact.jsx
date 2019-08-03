import React from 'react';


const SingleContact = (props) => {



    const {name, surname, phone, email, id} = props.contact;
    return (
        <div>
            <p>
                <strong>{name}</strong>
                <strong>{surname}</strong>
                <strong>{phone}</strong>
                <strong>{email}</strong>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )


};

export default SingleContact;