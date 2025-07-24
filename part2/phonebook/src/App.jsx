import { useState } from 'react';

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
    person.name.toLowerCase().includes(filterField)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{' '}
        <input
          value={filterField}
          onChange={(event) => setFilterField(event.target.value)}
          type="text"
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewName}>
        <div>
          name:{' '}
          <input value={newName} onChange={handlerNameChange} type="text" />
        </div>
        <div>
          number:{' '}
          <input value={phoneNumber} onChange={handlerPhoneChange} type="tel" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
