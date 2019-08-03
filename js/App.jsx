import React from 'react';
import ContactList from './ContactList.jsx';
import AddContact from './AddContact.jsx';


class App extends React.Component {

    state = {
        contacts: [
                    {
                        id: 0,
                        name: 'Jan',
                        surname: 'Kowalski',
                        phone: '111-222-333',
                        email: 'przyklad@email.com',
                        important: true,
                    },
                    {
                        id: 1,
                        name: 'Anna',
                        surname: 'Nowak',
                        phone: '444-555-666',
                        email: 'przyklad1@email.com',
                        important: false,
                    }
                ]
            };


    deleteContact = (id) => {
      const contacts = [...this.state.contacts];
      const index = contacts.findIndex(contact => contact.id === id);
      contacts.splice(index, 1);
      console.log(contacts);
      this.setState({
          contacts
      })
    };



    render() {
        return (
            <div className="container">
                <h1>Contact Book</h1>
                <AddContact/>
                <ContactList contacts={this.state.contacts} delete={this.deleteContact}/>
            </div>
        )
    }
}

export default App;