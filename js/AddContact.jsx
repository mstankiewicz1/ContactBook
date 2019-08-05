import React from 'react';


class AddContact extends React.Component{


    state = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        checked: false
    };


    render(){
        return (
            <div className="form">
                <input type="text" placeholder="Wpisz imię" value={this.state.name}/>
                <input type="text" placeholder="Wpisz nazwisko" value={this.state.surname}/>
                <input type="number" placeholder="Wpisz numer telefonu" value={this.state.phone}/>
                <input type="email" placeholder="Wpisz email" value={this.state.email}/>
                <br/>
                <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <button>Dodaj Kontakt</button>
            </div>
        );
    }
}


export default AddContact;