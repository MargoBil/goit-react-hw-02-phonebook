import React from 'react';

import ContactItem from '../ContactItem/ContactItem';

import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
  return (
    <ul className={s.list}>
      {contacts.map (({name, id, number}) => {
        return (<ContactItem contact={name} number = {number} key={id} onDeleteContact = {onDeleteContact} id = {id}/>);
      })}
    </ul>
  );
};

export default ContactList;
