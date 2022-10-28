import React, { useState } from 'react';
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

  const [contact, setContacts] = useState([]);

  const addContactHandler = (cnt) => {
    // console.log(cnt);
    setContacts([...contact, cnt]);
  };
  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact addContactHandler={addContactHandler} />
        <br />
        <ContactList contacts={contact} />
      </div>
    </>
  );
}

export default App;
