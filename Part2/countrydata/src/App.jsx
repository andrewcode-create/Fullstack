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
    const specific = allCountries
      .filter((country) =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      )
      .map((country) => country.name.common);
    console.log(`Seearch has ${specific.length} matches`);
    return specific;
  };

  return (
    <div>
      <p>Find counries </p>
      <input value={searchCountry} onChange={handleCountryChange} />
      <p>{countryToPrint()}</p>
    </div>
  );
};

export default App;
