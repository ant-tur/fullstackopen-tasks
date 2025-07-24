const Filter = ({ filterField, setFilterField }) => {
  return (
    <div>
      filter shown with{' '}
      <input
        value={filterField}
        onChange={(event) => setFilterField(event.target.value)}
        type="text"
      />
    </div>
  );
};

export default Filter;
