import React from 'react';


class AddContact extends React.Component{


    state = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        category: '',
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

        const {name, surname, phone, email, category, important} = this.state;

        const add = this.props.add(name, surname, phone,email, category, important);

        if(add){
            this.setState({
                name: '',
                surname: '',
                phone: '',
                email: '',
                category: '',
                important: false
            })
        }
    };


    render(){
        return <div className="form">
            <h2>Dodaj Kontakt</h2>
            <fieldset className="areaFields">
                <input name="name" type="text" placeholder="Wpisz imię" value={this.state.name}
                       onChange={this.handleChange}/>
                <input name="surname" type="text" placeholder="Wpisz nazwisko" value={this.state.surname}
                       onChange={this.handleChange}/>
                <input name="phone" type="number" placeholder="Wpisz numer telefonu" value={this.state.phone}
                       onChange={this.handleChange}/>
                <input name="email" type="email" placeholder="Wpisz email" value={this.state.email}
                       onChange={this.handleChange}/>
                <br/>
                <input className="signCheckbox" name="important" type="checkbox" checked={this.state.checked}
                       id="important"
                       onChange={this.handleChange}/>
                <label className="important" htmlFor="important">Priorytet</label>
                <br/>
                <select className="selectCategoryContact" name="category" type="text" value={this.state.category}
                        onChange={this.handleChange}>
                    <option>Wybierz kategorię</option>
                    <option value="Przyjaciele">Przyjaciele</option>
                    <option value="Rodzina">Rodzina</option>
                    <option value="Praca">Praca</option>
                    <option value="Inne">Inne</option>
                </select>
                <br/>
                <button className="addContactButton" type="submit" onClick={this.handleClick}>Dodaj Kontakt</button>
            </fieldset>
        </div>;
    }
}

export default AddContact;