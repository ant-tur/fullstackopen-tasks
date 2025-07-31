import Country from './Country';

const Description = ({ countries, onClick, chosenCountryId }) => {
  if (countries.length === 0) {
    return <>No matching countries found for your request</>;
  }

  if (countries.length > 10) {
    return <>Too many matches, specify another filter</>;
  }

  if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
      </div>
    );
  }

  if (chosenCountryId) {
    const country = countries.find(c => c.area === chosenCountryId);
    return <Country country={country} />;
  }

  return (
    <>
      {countries.map(country => {
        return (
          <div key={country.area}>
            {country.name.common}
            <button onClick={() => onClick(country.area)}>Show</button>
          </div>
        );
      })}
    </>
  );
};

export default Description;
