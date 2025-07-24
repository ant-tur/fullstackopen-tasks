import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filterField, setFilterField] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handlerNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlerPhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const addNewName = (event) => {
    event.preventDefault();

    if (persons.every((person) => person.name !== newName)) {
      setPersons(
        persons.concat({
          name: newName,
          number: phoneNumber,
          id: persons.length + 1,
        })
      );
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName('');
    setPhoneNumber('');
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterField.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterField={filterField} setFilterField={setFilterField} />

      <h3>add a new</h3>
      <PersonForm
        addNewName={addNewName}
        newName={newName}
        handlerNameChange={handlerNameChange}
        phoneNumber={phoneNumber}
        handlerPhoneChange={handlerPhoneChange}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
