import React from 'react';


class AddContact extends React.Component{


    state = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        important: false
    };

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    };

    handleClick = () => {

        const {name, surname, phone,email, important} = this.state;

        const add = this.props.add(name, surname, phone,email, important);

        if(add){
            this.setState({
                name: '',
                surname: '',
                phone: '',
                email: '',
                important: false
            })
        }
    };


    render(){
        return (
            <div className="form">
                <input name="name" type="text" placeholder="Wpisz imię" value={this.state.name} onChange={this.handleChange}/>
                <input name="surname" type="text" placeholder="Wpisz nazwisko" value={this.state.surname} onChange={this.handleChange}/>
                <input name="phone" type="number" placeholder="Wpisz numer telefonu" value={this.state.phone} onChange={this.handleChange}/>
                <input name="email" type="email" placeholder="Wpisz email" value={this.state.email} onChange={this.handleChange}/>
                <br/>
                <input name="important" type="checkbox" checked={this.state.checked} id="important" onChange={this.handleChange}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <button onClick={this.handleClick}>Dodaj Kontakt</button>
            </div>
        );
    }
}


export default AddContact;