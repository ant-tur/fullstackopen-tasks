import { useEffect, useState } from 'react';

import service from './services/countries';
import Form from './components/Form';
import Description from './components/Description';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');

  const { getAll } = service;

  useEffect(() => {
    getAll().then(returnedCountries => {
      setCountries(returnedCountries);
    });
  }, []);

  const handleInputChange = event => {
    setCountryName(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(countryName.toLowerCase())
  );

  return (
    <div>
      <Form handleInputChange={handleInputChange} />
      <Description countries={filteredCountries} />
    </div>
  );
}

export default App;
