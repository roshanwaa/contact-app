import React from 'react';
import { ContactCard } from './ContactCard';

export const ContactList = (props) => {
  const renderContacts = props.contacts.map((contact, key) => {
    return <ContactCard contact={contact} key={key}></ContactCard>;
  });

  return <div className="ui celled list">{renderContacts}</div>;
};
