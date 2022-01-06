import React, { useState, useEffect } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([{}]);

  const getContacts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setContacts(users);
  };

  useEffect(() => {
    getContacts();
  });

  return (
    <div>
      <h1>Hello Contacts</h1>
      {JSON.stringify(contacts)}
    </div>
  );
}

export default Contacts;
