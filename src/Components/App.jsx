import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Header } from './Header';

import AddContact from './AddContact';
import { ContactList } from './ContactList';

function App() {
  // const contact = [
  //   {
  //     id: '1',
  //     name: 'Roshan Kumar',
  //     email: 'kumroshan120@gmail.com',
  //   },
  //   {
  //     id: '2',
  //     name: 'Mr.Smoke',
  //     email: 'mrsmoke7890@gmail.com',
  //   },
  //   {
  //     id: '3',
  //     name: 'Ayush',
  //     email: 'ayushkrishna@gmail.com',
  //   },
  // ];
  const LOCAL_STORAGE_KEY = 'Contacts';

  const [contact, setContacts] = useState([]);

  const addContactHandler = (cnt) => {
    // console.log(cnt);
    setContacts([...contact, { id: uuidv4(), ...cnt }]);
  };

  const removeContactHandler = (id) => {
    const newContact = contact.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContact);
  };

  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retrieveContact);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact addContactHandler={addContactHandler} />
        <br />
        <ContactList contacts={contact} getContactId={removeContactHandler} />
      </div>
    </>
  );
}

export default App;
