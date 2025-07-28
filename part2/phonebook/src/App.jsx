import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filterField, setFilterField] = useState('');

  const { getAll, createPerson, updatePerson, deletePerson } = personsService;

  useEffect(() => {
    getAll().then((initialData) => {
      setPersons(initialData);
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

    const person = {
      name: newName,
      number: phoneNumber,
    };

    if (persons.every((p) => p.name !== newName)) {
      createPerson(person).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const oldPerson = persons.find((p) => p.name === newName);

        updatePerson(oldPerson.id, person).then((returnedPerson) => {
          setPersons(
            persons.map((p) => (p.id === oldPerson.id ? returnedPerson : p))
          );
        });
      }
    }

    setNewName('');
    setPhoneNumber('');
  };

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
      <Persons persons={filteredPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
