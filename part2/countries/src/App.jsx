import { useEffect, useState } from 'react';

import service from './services/countries';
import Form from './components/Form';
import Description from './components/Description';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [chosenCountryName, setChosenCountryName] = useState('');

  const { getAll } = service;

  useEffect(() => {
    getAll().then(returnedCountries => {
      setCountries(returnedCountries);
    });
  }, []);

  const handleFilterChange = event => {
    setCountryName(event.target.value);
    setChosenCountryName('');
  };

  const handleClickButton = name => {
    setChosenCountryName(name);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(countryName.toLowerCase())
  );

  return (
    <div>
      <Form handleFilterChange={handleFilterChange} countryName={countryName} />
      <Description
        countries={filteredCountries}
        chosenCountryName={chosenCountryName}
        onClick={handleClickButton}
      />
    </div>
  );
}

export default App;
