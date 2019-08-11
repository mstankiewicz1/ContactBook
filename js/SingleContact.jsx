import React from 'react';


const SingleContact = (props) => {


    const style = {
        color: 'red'
    };

    const {name, surname, phone, email, id, category, important} = props.contact;
    return (
        <div>
            <p style={important ? style : null}>
                <table>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{surname}</td>
                            <td className="tdPhone">{phone}</td>
                            <td className="tdEmail">{email}</td>
                            <td>{category}</td>
                            <td><button onClick={() => props.delete(id)}>X</button></td>
                        </tr>
                    </tbody>
                </table>
            </p>
        </div>
    )


};

export default SingleContact;