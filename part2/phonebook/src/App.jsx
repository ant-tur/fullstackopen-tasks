import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filterField, setFilterField] = useState('');

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
