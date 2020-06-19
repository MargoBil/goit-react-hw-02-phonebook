import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = ({target}) => {
    const filter = target.value;
    this.setState ({filter});
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter (contact =>
      contact.name.toLowerCase ().includes (filter.toLowerCase ())
    );
  };

  addName = ({name, number}) => {
    const {contacts} = this.state;
    const identicContact = contacts.find (contact => {
      return contact.name.toLowerCase () === name.toLowerCase ();
    });

    if (identicContact) {
      alert (`${name} is already in contacts!`);
      return;
    }

    const contact = {
      id: uuidv4 (),
      name,
      number,
    };

    this.setState (prevState => {
      return {contacts: [...prevState.contacts, contact]};
    });
  };

  deleteContact = contactId => {
    this.setState (prevState => {
      return {
        contacts: prevState.contacts.filter (
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render () {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts ();
    const visibleFilter = visibleContacts.length > 1;
    const visibleList = visibleContacts.length > 0;

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onAddName={this.addName} />
          {visibleFilter &&
            <Filter value={filter} onChange={this.changeFilter} />}
        </Section>
        {visibleList &&
          <Section title="Contacts">
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>}
      </div>
    );
  }
}

export default App;
