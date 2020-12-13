import React, { Component } from 'react';
import s from './phonebook.module.css';

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
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeName}
            className={s.input}
          ></input>
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            className={s.input}
          ></input>
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
