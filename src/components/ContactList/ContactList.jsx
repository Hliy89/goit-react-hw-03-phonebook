import React from 'react';

import style from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const contactElement = filterContacts.map(({ name, number, id }) => (
    <li key={id} className={style.contactListItem}>
      {name}: {number}
      <span onClick={() => onDelete(name)} className={style.closeButton}></span>
    </li>
  ));

  return <ul className={style.contactList}>{contactElement}</ul>;
};

export default ContactList;
