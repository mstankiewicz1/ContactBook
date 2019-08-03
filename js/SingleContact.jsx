import React from 'react';


const SingleContact = (props) => {


    const style = {
        color: 'red'
    };

    const {name, surname, phone, email, id, important} = props.contact;
    return (
        <div>
            <p>
                <div style={important ? style : null}>
                    <strong>{name}</strong>
                    <strong>{surname}</strong>
                    <strong>{phone}</strong>
                    <strong>{email}</strong>
                    <button onClick={() => props.delete(id)}>X</button>
                </div>
            </p>
        </div>
    )


};

export default SingleContact;