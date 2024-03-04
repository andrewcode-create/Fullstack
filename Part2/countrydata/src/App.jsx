import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setAllCountries(response.data);
        console.log("got initial country data");
      });
  }, []);

  const handleCountryChange = (event) => {
    setSearchCountry(event.target.value);
    console.log("change country");
  };

  const countryToPrint = () => {
    const specific = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    console.log(`Seearch has ${specific.length} matches`);
    return specific;
  };

  const contries = countryToPrint();

  const countryInfo = (contries) => {
    if (contries.length !== 1) return "";
    return contries.map(
      (country) =>
        `Capital: ${country.capital}, Languages: <ul>${country.languages}
        </li>`
    );
  };

  const handleShowButton = (country) => {
    setSearchCountry(country.name.common);
  };

  return (
    <div>
      <p>Find counries </p>
      <input value={searchCountry} onChange={handleCountryChange} />
      <p>
        {contries.length > 10
          ? "Too many matches, specify another filter"
          : contries.map((country) => country.name.common).join("...")}
        <br />
      </p>

      {contries.length === 1 ? (
        <>
          <p>Capital: {contries.map((country) => country.capital)}</p>
          <p>Population: {contries.map((country) => country.population)}</p>
          <p>Area: {contries.map((country) => country.area)}</p>
          <p>Languages:</p>
          <ul>
            {contries.map((country) =>
              Object.entries(country.languages).map(([code, language]) => (
                <li key={code}>{language}</li>
              ))
            )}
          </ul>
          <img src={contries.map((country) => country.flags.png)}></img>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
