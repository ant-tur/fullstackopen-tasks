const PersonForm = ({
  addNewName,
  newName,
  handlerNameChange,
  phoneNumber,
  handlerPhoneChange,
}) => {
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handlerNameChange} type="text" />
      </div>
      <div>
        number:{' '}
        <input value={phoneNumber} onChange={handlerPhoneChange} type="tel" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
