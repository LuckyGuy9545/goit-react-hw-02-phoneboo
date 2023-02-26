import React from 'react';

const ContactList = ({ contacts, onContactDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onContactDelete(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
