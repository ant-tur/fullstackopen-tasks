const SuccessMessage = ({ message }) => {
  if (message === null) {
    return;
  }

  const styles = {
    backgroundColor: 'lightgrey',
    color: 'green',
    fontSize: '20px',
    border: '2px solid green',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  return <div style={styles}>{message}</div>;
};

export default SuccessMessage;
