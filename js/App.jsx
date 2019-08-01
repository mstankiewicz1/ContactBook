import React from 'react';
import ContactList from './ContactList.jsx';


class App extends React.Component {

    state = {
        contacts: [
                    {
                        id: 0,
                        name: 'Jan',
                        surname: 'Kowalski',
                        phone: '111-222-333',
                        email: 'przyklad@email.com',
                    },
                    {
                        id: 1,
                        name: 'Anna',
                        surname: 'Nowak',
                        phone: '444-555-666',
                        email: 'przyklad1@email.com',
                    }
                ]
            };



    render() {
        return (
            <div className="container">
                <h1>Contact Book</h1>
                <ContactList contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App;