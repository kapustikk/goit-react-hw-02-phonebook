import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.setState({ name: '', number: '' });
    if (this.contactMatch()) {
      return;
    }
    this.props.onSubmit(name, number);
  };

  contactMatch = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const nameMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numberMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );
    if (nameMatch.includes(name) || numberMatch.includes(number)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
