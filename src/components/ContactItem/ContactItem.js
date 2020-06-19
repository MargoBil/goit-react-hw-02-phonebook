import React from 'react';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, onDeleteContact, id}) => {
  return (
    <li className={s.item} >
      <p>{contact}: {number}</p>
      <button onClick = {()=>onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
