const Form = ({ countryName, handleFilterChange }) => {
  return (
    <form>
      <label>
        find countries
        <input type="text" onChange={handleFilterChange} value={countryName} />
      </label>
    </form>
  );
};

export default Form;
