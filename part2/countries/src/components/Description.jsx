import Country from './Country';

const Description = ({ countries }) => {
  if (countries.length > 10 || countries.length === 0) {
    return <>Too many matches, specify another filter</>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <>
        {countries.map(country => {
          return <div key={country.area}>{country.name.common}</div>;
        })}
      </>
    );
  }

  return (
    <div>
      <Country country={countries[0]} />
    </div>
  );
};

export default Description;
