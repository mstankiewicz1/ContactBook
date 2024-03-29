import React from 'react';
import ContactList from './ContactList.jsx';
import AddContact from './AddContact.jsx';


class App extends React.Component {

    counter = 0;

    state = {
        contacts: []
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

    addContact = (name, surname, phone, email, category, important) => {

        const contact = {
            id: this.counter,
            name,
            surname,
            phone,
            email,
            category,
            important,
        };
        this.counter++;
        this.setState({
            contacts: [...this.state.contacts, contact]
        });
        return true;
    };


    render() {
        return (
            <div className="container">
                <h1>Książka Kontaktowa</h1>
                <AddContact add={this.addContact}/>
                <ContactList contacts={this.state.contacts} delete={this.deleteContact}/>
            </div>
        )
    }
}

export default App;