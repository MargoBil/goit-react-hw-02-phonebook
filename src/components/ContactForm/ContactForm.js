import React, {Component} from 'react';

import InputMask from 'react-input-mask';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault ();
    this.props.onAddName (this.state);
    this.setState ({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState ({[name]: value});
  };

  render () {
    const {name, number} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input className={s.input} type="text" value={name} name="name" onChange={this.handleChange} />
        </label>
        <label>
          Number
          <InputMask className={s.input} mask="999-99-99" maskChar=" " value={number} name="number" onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
