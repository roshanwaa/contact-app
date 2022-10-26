import React from 'react';

export const AddContact = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form">
        <div className="filed">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter name" />
        </div>
        <div className="filed">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email" />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};
