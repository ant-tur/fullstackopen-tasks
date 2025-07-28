const Persons = ({ persons, removePerson }) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Persons;
