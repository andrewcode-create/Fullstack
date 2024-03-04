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

  <ul>
    {Object.entries(country.languages).map(([code, language]) => (
      <li key={code}>
        {code}: {language}
      </li>
    ))}
  </ul>;

  return (
    <div>
      <p>Find counries </p>
      <input value={searchCountry} onChange={handleCountryChange} />
      <p>
        {contries.length > 10
          ? "Too many matches, specify another filter"
          : contries.map((country) => country.name.common).join(", ")}
        <br />
        hi
        {contries.length === 1 ? (
          <ul>
            {contries.filter((country) =>
              Object.entries(country.languages).map(([code, language]) => (
                <li key={code}>
                  {code}: {language}
                </li>
              ))
            )}
          </ul>
        ) : (
          ""
        )}
        {countryInfo(contries)}
      </p>
    </div>
  );
};

export default App;
