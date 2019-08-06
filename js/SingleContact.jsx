import React from 'react';


const SingleContact = (props) => {


    const style = {
        color: 'red'
    };

    const {name, surname, phone, email, id, category, important} = props.contact;
    return (
        <div>
            <p style={important ? style : null}>
                    <strong>{name}</strong>
                    <strong>{surname}</strong>
                    <strong>{phone}</strong>
                    <strong>{email}</strong>
                    <strong>{category}</strong>
                    <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )


};

export default SingleContact;