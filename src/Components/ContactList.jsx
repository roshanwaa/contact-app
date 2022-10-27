import React from 'react';

export const ContactList = (props) => {
  const renderContacts = props.contacts.map((contact, key) => {
    return (
      <div className="item" key={key}>
        <div className="content">
          <div className="header">
            <h2>{contact.name}</h2>
          </div>
          <div className="">
            <p>{contact.email}</p>
          </div>
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    );
  });
  return <div className="ui celled list">{renderContacts}</div>;
};
