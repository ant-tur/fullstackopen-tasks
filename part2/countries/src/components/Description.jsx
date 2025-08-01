import Country from './Country';
import Weather from './Weather';

const Description = ({ countries, onClick, chosenCountryName }) => {
  if (countries.length > 10) {
    return <>Too many matches, specify another filter</>;
  }

  if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
        <Weather country={countries[0]} />
      </div>
    );
  }

  if (chosenCountryName) {
    const country = countries.find(c => c.name.common === chosenCountryName);
    if (country) {
      return (
        <div>
          <Country country={country} />
          <Weather country={country} />
        </div>
      );
    }
    return <>Country not found</>;
  }

  return (
    <>
      {countries.map(country => {
        return (
          <div key={country.area}>
            {country.name.common}
            <button onClick={() => onClick(country.name.common)}>Show</button>
          </div>
        );
      })}
    </>
  );
};

export default Description;
