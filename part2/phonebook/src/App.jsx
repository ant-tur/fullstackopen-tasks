import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';
import SuccessMessage from './components/SuccessMessage';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filterField, setFilterField] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const { getAll, createPerson, updatePerson, deletePerson } = personsService;

  useEffect(() => {
    getAll().then(initialData => {
      setPersons(initialData);
    });
  }, []);

  const handlerNameChange = event => {
    setNewName(event.target.value);
  };

  const handlerPhoneChange = event => {
    setPhoneNumber(event.target.value);
  };

  const addNewName = event => {
    event.preventDefault();

    const person = {
      name: newName,
      number: phoneNumber,
    };

    if (persons.every(p => p.name !== newName)) {
      createPerson(person).then(returnedPerson => {
        setMessage(`Adding ${returnedPerson.name}`);
        setPersons(persons.concat(returnedPerson));

        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const oldPerson = persons.find(p => p.name === newName);

        updatePerson(oldPerson.id, person)
          .then(returnedPerson => {
            setMessage(`Updated phone number of ${returnedPerson.name}`);
            setPersons(
              persons.map(p => (p.id === oldPerson.id ? returnedPerson : p))
            );

            // setTimeout(() => {
            //   setMessage(null);
            // }, 3000);
          })
          .catch(() => {
            setErrorMessage(
              `Information of ${person.name} has already been removed from server`
            );
          })
          .finally(() => {
            setTimeout(() => {
              setMessage(null);
              setErrorMessage(null);
            }, 3000);
          });
      }
    }

    setNewName('');
    setPhoneNumber('');
  };

  const removePerson = id => {
    const person = persons.find(p => p.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(() => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          );
        })
        .finally(() => {
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterField.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMessage message={message} />
      <ErrorMessage message={errorMessage} />
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
