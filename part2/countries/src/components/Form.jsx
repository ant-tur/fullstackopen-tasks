const Form = ({ handleInputChange }) => {
  return (
    <form>
      <label>
        find countries
        <input type="text" onChange={handleInputChange} />
      </label>
    </form>
  );
};

export default Form;
