import React from 'react';
import { Button } from 'semantic-ui-react';

import usrImage from '../Images/pngwing.com.png';
import './ContactCard.css';
export const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="img-user ui image" src={usrImage} alt="UserImage" />
      <div className="content">
        <div className="header">
          <h2>{name}</h2>
        </div>
        <div>
          <p>{email}</p>
        </div>
      </div>
      {/* <Button basic color="red" floated="right">
        Delete
        <Icon floated="right" className="trash icon"></Icon>
      </Button> */}
      <Button
        icon="trash alternate"
        floated="right"
        basic
        color="red"
        style={{ marginTop: '15px' }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
};
