import React from 'react';


const SingleContact = (props) => {


    const styleImportant = {
        color: '#FF3333'
    };
    const styleNotImportant = {
        color: '#F9F9F9'
    };


    const {name, surname, phone, email, id, category, important} = props.contact;

    return (
        <div>
            <p style={important ? styleImportant : styleNotImportant}>
                <table>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{surname}</td>
                            <td className="tdPhone">{phone}</td>
                            <td className="tdEmail">{email}</td>
                            <td>{category}</td>
                            <td><button className="deleteContactButton" onClick={() => props.delete(id)}>USUŃ</button></td>
                        </tr>
                    </tbody>
                </table>
            </p>
        </div>
    )


};

export default SingleContact;